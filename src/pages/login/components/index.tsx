import { LoginCardContainer } from "./styles"
import { ArrowRight, Check } from "phosphor-react"
import { Checkbox } from "../../../components/checkbox"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState,useContext } from "react"
import { api } from "../../../lib/axios"
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"
import { errorMessageTypes } from "../../../errors/errorsMessages"
import { ErrorMessageContainer } from "../../register/components/registerCardContent/styles"
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})


type loginFormInputs = z.infer<typeof loginSchema>

export function LoginCard() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const cookies = new Cookies()
    const {register, handleSubmit,formState:{errors, isValid}} = useForm<loginFormInputs>({
        resolver:zodResolver(loginSchema),
        defaultValues:{
            email: '',
            password: ''
        }
    })
    async function fetchLoginApi(data:loginFormInputs){
        cookies.remove('authorization_token') 
        try {
            const resolve = await api.post('/session', data)
            cookies.set('authorization_token', resolve.data.token)
            verifyIsAdmin()
        } catch (error:any) {
            setErrorMessage(errorMessageTypes(error.response.data.type))
        }
    }

    async function verifyIsAdmin(){
        const tokenAuth = cookies.get("authorization_token")
        var config = { headers: { Authorization: "bearer " + tokenAuth } };
        const resolve = await api.post('verify_token', {}, config)
        try {
            if(resolve.data.isAdmin) navigate('/admin')
            else navigate('/profile')
        } catch (error) {
            throw error
        }
    }

    function clearInputFildOnFocus(){
        if(errorMessage !== ''){
            setErrorMessage('')
        }
        
    }
    return (
        <LoginCardContainer 
        inputBorderColor={errorMessage ? '#F65A7F' : 'transparent'} 
        fontInputColor={errorMessage ? '#F65A7F' : "#3A3A3A"}
        >
            <header>
                <h3>FAÇA SEU LOGIN</h3>
                <p>Entre aqui com sua conta e acesse nosso sistema de planejamentos!</p>
            </header>
            <form onSubmit={handleSubmit(fetchLoginApi)}>
                {errorMessage && <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>}
                <input
                onFocus={clearInputFildOnFocus} 
                {...register('email')}
                type="text" 
                placeholder="E-mail"
                />
                <input 
                onFocus={clearInputFildOnFocus}  
                {...register('password')}  
                type="password"
                placeholder="Senha" 
                />
                <div>
                    <Checkbox labelText='Continuar Conectado' />
                </div>
                <button type="submit" disabled={!isValid}>
                    Fazer Login <ArrowRight size={24} color='#fff' weight="bold" />
                </button>
            </form>
            <nav>
                <span>Não tem conta ainda?<a href="/registrar"> Crie aqui</a></span>
                <a href="/recuperar-senha">Esqueci minha senha</a>
            </nav>
        </LoginCardContainer>
    )
}