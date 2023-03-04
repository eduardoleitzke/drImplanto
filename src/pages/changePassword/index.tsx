import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { ChangePasswordContainer,ChangePasswordCardButton,ChangePasswordCardContainer } from "./styles";
import { ValidationPassword } from "../../utils/validationInputs";
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from "react-toastify";




export function ChangePassword(){
    const navigate = useNavigate()
    const {register, handleSubmit, watch, formState:{isSubmitting}} = useForm()
    const [changePasswordDone, setChangePasswordDone] = useState(false)
    const [validUrl, setValidUrl] = useState(false)
    const {token} = useParams()
    useEffect(()=>{
        
        const authToken = token?.replace(/\-/g, '.')
        async function fetchToApi(){
            var config = { headers: { Authorization: "bearer " + authToken } };
            await  api.post('/verify_recoveryToken', {},  config)
            .then((response)=> {
                localStorage.setItem('@toChangeEmail/DrImplanto', response.data)
                setValidUrl(true)
            })
            .catch(error=>{
                navigate('/')   
            })
        }
        fetchToApi()
      
    }, [])
    const password = watch('newPassword')
    const confirmPassword = watch('confirmNewPassword')

    async function changePassword(data:any){
        console.log(data)
        if(data.newPassword !== data.confirmNewPassword){
            toast.error('SENHAS DIFERENTES', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        if(!ValidationPassword(data.newPassword, data.confirmNewPassword)){
            toast.error('SENHA INVÁLIDA', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        const email = localStorage.getItem('@toChangeEmail/DrImplanto')
        const resolve = await api.put('/change_password', {password: data.newPassword, email}).
        then(resolve => setChangePasswordDone(true))
        .catch(err => console.log(err))
    }

    return (
        <>
        {validUrl ? (
            <ChangePasswordContainer>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ChangePasswordCardContainer>
                {changePasswordDone ? (
                    <>
                        <header>
                            <h3>SENHA ALTERADA COM SUCESSO</h3>
                            <p>Você pode volta e se logar com o nova senha</p>
                        </header>
                        <a href="/login">Voltar a pagina de login</a>
                </>
                )
                :(
                    <>
                        <header>
                            <h3>DIGITE SUA NOVA SENHA</h3>
                            <p>Senha deve conter uma letra maiscula, um número e um caractere especial</p>
                        </header>
                        <form onSubmit={handleSubmit(changePassword)}>
                            <input {...register('newPassword')} type="password" placeholder="Nova senha"/>
                            <input {...register('confirmNewPassword')} type="password" placeholder="Confirmar senha"/>
                            <ChangePasswordCardButton disabled={!password || !confirmPassword}>Trocar senha</ChangePasswordCardButton>
                        </form>
                    </>
                )
            }
                
            </ChangePasswordCardContainer>
        </ChangePasswordContainer>
        )
        :
        (
            <></>
        )
        }
         </>
    )
   
}