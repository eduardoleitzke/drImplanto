import { RegisterContainer } from "./styles"
import { RegisterCard } from "./components/registerCard"
import { useContext } from "react"
import { registerContext } from "../../contexts/RegisterContext"
import React from "react"
export function Register() {
    const { emailVerify } = useContext(registerContext)
    return (
        <RegisterContainer screenHeight={emailVerify ? '100vh' : 'auto'}>
            <h2>Smart Planejamento Dentário</h2>
            <RegisterCard />
        </RegisterContainer>
    )
}