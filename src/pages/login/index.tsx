import { LoginContainer} from "./styles"
import { LoginCard } from "./components"
import Cookies from "universal-cookie"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../lib/axios"
import  BackGroundImage  from "../../assets/login/background.png"
export function Login(){
    const navigate = useNavigate()
    const cookies = new Cookies()
    const tokenAuth = cookies.get("authorization_token")
    useEffect(()=>{
        if(tokenAuth){
            navigate('/profile')
        }
    }, [navigate, tokenAuth])
    return (
        <>
        
            {!tokenAuth && (
                <LoginContainer>
                    <img src={BackGroundImage} alt="" />
                    <h2>Smart Planejamento Dentário</h2>
                    <LoginCard/>
                </LoginContainer>
            )}
        </>
    )
}