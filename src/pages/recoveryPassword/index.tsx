import { RecoveryPasswordCardContainer, RecoveryPasswordContainer, RecoveryPasswordCardButton } from "./styles"
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { api } from "../../lib/axios"
import { ToastContainer, toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner'
import 'react-toastify/dist/ReactToastify.css';


export function RecoveryPassword() {
    const { register, handleSubmit, watch, formState: { isSubmitting } } = useForm()
    const emailValue = watch('email')
    const [response, setReponse] = useState(false)

    async function sendEMailToRecoveryPassword(data: any) {
        const resolve = await api.post('/password_forgot', { email: data.email })
            .then(() => setReponse(true))
            .catch((error) => {
                toast.error('EMAIL NÃO CADASTRADO', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })

    }

    return (
        <RecoveryPasswordContainer>

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


            <RecoveryPasswordCardContainer>
                {!response ?
                    (
                        <>
                            {!isSubmitting ? (
                                <>
                                    <header >
                                        <h3>RECUPERAR SENHA</h3>
                                        <p>Enviaremos um email para recuperar sua senha!</p>
                                    </header>
                                    <form onSubmit={handleSubmit(sendEMailToRecoveryPassword)}>
                                        <input {...register('email')} type="email" placeholder="E-MAIL" />
                                        <RecoveryPasswordCardButton type="submit" disabled={!emailValue}>RECUPERAR SENHA</RecoveryPasswordCardButton>
                                    </form>
                                </>
                            )
                                : (
                                    <TailSpin
                                        height="180"
                                        width="200"
                                        color="#21B1D6"
                                    />
                                )
                            }

                        </>
                    )
                    : (
                        <>
                            <header >
                                <h3>EMAIL ENVIADO</h3>
                                <p>Verifique seu email para recuperar sua senha!</p>
                            </header>

                        </>
                    )
                }

            </RecoveryPasswordCardContainer>
        </RecoveryPasswordContainer>
    )
}