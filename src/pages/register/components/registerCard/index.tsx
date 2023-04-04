import { RegisterCardContainer } from "./style"
import { RegisterCardContent } from "../registerCardContent"
import { useContext } from "react"
import { registerContext } from "../../../../contexts/RegisterContext"
import React from "react"
export function RegisterCard(){
    const {emailVerify} = useContext(registerContext)
    return (
        <>
            {!emailVerify ? (
                <RegisterCardContainer positionCard="static">
                    <header >
                        <h3>CRIE SUA CONTA</h3>
                        <p>Entre com seus dados e crie sua conta para acessar nosso sistema de planejamentos!</p>
                    </header>
                    <RegisterCardContent/>
                    <a href="/login">Voltar à tela de Login</a>
                </RegisterCardContainer>
            ) :
            (
                <RegisterCardContainer positionCard='absolute'>
                    <header >
                        <h3>VERIFICAR EMAIL</h3>
                        <p>Seu cadastro foi concluído e enviamos um email para confirmar a criação!</p>
                    </header>
                    <a href="/login">Voltar à tela de Login</a>
                </RegisterCardContainer>
            )
        }
    </>
        
    )
    
}