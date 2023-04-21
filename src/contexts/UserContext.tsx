import { createContext, ReactNode, useEffect, useState } from "react";
import { Outlet, useNavigate, redirect } from "react-router-dom";
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
    isAdmin: boolean;
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
                setLoggedUser(resolve.data)
                setValidToken(true)
                if(loggedUser.isAdmin){
                    redirect('/admin')
                }
                })
            .catch((error)=>{console.log(error)
            cookies.remove("authorization_token")
            redirect('/login')})
         
        }
        fetchTokenValidation()
    }, [setValidToken, navigate, setLoggedUser])
    
    useEffect(()=>{
        if(loggedUser.id){
            async function fetchVerifySubscription(){
                if(loggedUser.isAdmin){
                    navigate('/admin')
                }
                else{
                const userId = loggedUser.id
                await api.post('/search_payment',{userId})
                .then(response=>{
                    return response
                })
                .then((resolve)=>{
                    console.log(resolve)
                    if(!subscriptionData){
                        setSubscriptionData(resolve.data)
                    }
                    })
                .catch((error)=>{
                console.log(loggedUser)
                navigate('/planos')})
            }
        }
            fetchVerifySubscription()
        }
    }, [loggedUser])


    useEffect(()=>{
        if(loggedUser.isAdmin){
            console.log('erro')
        }
    },[])

    function changeAttrLoggedUser(plan:string){
        const userWithPlanUpdated = {email: loggedUser.email, plan, id: loggedUser.id, isAdmin: loggedUser.isAdmin}
        setLoggedUser(userWithPlanUpdated)
    }

    return(
        <UserContext.Provider value={{validToken, loggedUser, changeAttrLoggedUser}}>
            {children}
            {<Outlet/>}
        </UserContext.Provider>
    )
}




