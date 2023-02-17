import { LoginContainer} from "./styles"
import { LoginCard } from "./components"
import Cookies from "universal-cookie"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../lib/axios"
export function Login(){
    const navigate = useNavigate()
    const cookies = new Cookies()
    const [loadingScreen, setLoadingScreen ] = useState(true)
    const tokenAuth = cookies.get("authorization_token")
    useEffect(()=>{
        if(!tokenAuth){
            setLoadingScreen(false)
        }
    }, [setLoadingScreen, tokenAuth])
    useEffect(()=>{
        if(tokenAuth){
        async function fetchTokenValidation() {
            var config = { headers: { Authorization: "bearer " + tokenAuth } };
            await api.post('/verify_token', {}, config)
            try {
                navigate('/profile')
            } catch (error) {
                setLoadingScreen(false)
                cookies.remove("authorization_token")
            }
         
        }
        fetchTokenValidation()
        }
    }, [navigate, cookies, setLoadingScreen, tokenAuth])
    return (
        <>
            {!loadingScreen && (
                <LoginContainer>
                    <h2>Smart Planejamento Dentário</h2>
                    <LoginCard/>
                </LoginContainer>
            )}
        </>
    )
}