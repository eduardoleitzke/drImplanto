import { createContext, ReactNode, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { api } from "../lib/axios";

interface IAdminContextProviderProps{
    children: ReactNode
}

interface verifyTokenContextType{
    validToken: boolean
    loggedUser: ILoggedUserType
}
interface ILoggedUserType{
    isAdmin: boolean;
    email: string,
    plan: string,
    id: string
}
export const AdminContext = createContext({} as verifyTokenContextType)
export function AdminContextProvider({children}:IAdminContextProviderProps){
    const [validToken, setValidToken] = useState(false)
    const [loggedUser, setLoggedUser] = useState({} as ILoggedUserType)
    const cookies = new Cookies()
    useEffect(() => {
        const tokenAuth = cookies.get("authorization_token")
        async function fetchTokenValidation() {
            var config = { headers: { Authorization: "bearer " + tokenAuth } };
            await api.post('/verify_token', {}, config)
            .then(response=>{
                return response
            })
            .then((resolve)=>{
                console.log(resolve.data)
                setLoggedUser(resolve.data)
                console.log(loggedUser)
                setValidToken(true)
                })
            .catch((error)=>{console.log(error)
            cookies.remove("authorization_token")
            })
         
        }
        fetchTokenValidation()
    }, [setValidToken, setLoggedUser])

    return(
        <AdminContext.Provider value={{validToken, loggedUser}}>
            {children}
            {<Outlet/>}
        </AdminContext.Provider>
    )
}
