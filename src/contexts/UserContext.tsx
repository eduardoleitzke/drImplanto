import { createContext, ReactNode, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { api } from "../lib/axios";

interface IUserContextProviderProps{
    children: ReactNode
}

interface verifyTokenContextType{
    validToken: boolean
    loggedUser: ILoggedUserType
    changeAttrLoggedUser: (data:string)=> void
}

interface ILoggedUserType{
    email: string,
    plan: string,
    id: string
}

interface ISubscriptionType{
    reason: string
    status: string
}
export const UserContext = createContext({} as verifyTokenContextType)


export function UserContextProvider({children}:IUserContextProviderProps){
    const [validToken, setValidToken] = useState(false)
    const [loggedUser, setLoggedUser] = useState({} as ILoggedUserType)
    const [subscriptionData, setSubscriptionData] = useState({} as ISubscriptionType)
    const navigate = useNavigate()
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
                setValidToken(true)
                })
            .catch((error)=>{console.log(error)
            cookies.remove("authorization_token")
            navigate('/login')})
         
        }
        fetchTokenValidation()
    }, [setValidToken, navigate, setLoggedUser])
    
    useEffect(()=>{
        if(loggedUser.id){
            async function fetchVerifySubscription(){
                const userId = loggedUser.id
                console.log(userId)
                await api.post('/search_payment',{userId})
                .then(response=>{
                    return response
                })
                .then((resolve)=>{
                    const {data:{reason, status}} = resolve
                    if(!subscriptionData){
                        setSubscriptionData(resolve.data)
                    }
                   
                    console.log(resolve.data)
                    })
                .catch((error)=>{console.log(error)
                navigate('/planos')})
            }
            fetchVerifySubscription()
        }
    }, [loggedUser])

    function changeAttrLoggedUser(plan:string){
        const userWithPlanUpdated = {email: loggedUser.email, plan, id: loggedUser.id}
        setLoggedUser(userWithPlanUpdated)
    }

    return(
        <UserContext.Provider value={{validToken, loggedUser, changeAttrLoggedUser}}>
            {children}
            {<Outlet/>}
        </UserContext.Provider>
    )
}




