import { Menu } from "./components/menu"
import { ProfileContainer } from "./styles"
import { ProfileHome } from "./components/profileHome"
import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/UserContext"
import { api } from "../../lib/axios"
export function Profile() {
    const {validToken, loggedUser} = useContext(UserContext)
    useEffect(()=>{
        if(validToken){
            const userId = loggedUser.id
            async function fetchToApi(){
                const resolve = await api.post('/verify_assignment', {id:userId})
                try {
                    console.log(resolve.data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchToApi()
        }
    },[validToken])
    return (
        <>
        {validToken? (
                <ProfileContainer>
                    <Menu />
                    <ProfileHome />
                </ProfileContainer>
            )
           :(
                <></>
            )
    }
        </>
        
    )
}