import { ArrowRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { RegisterOptions, UseFormRegister, UseWatchProps } from "react-hook-form/dist/types";
import { Checkbox } from "../../../../../../components/checkbox";
import { registerContext } from "../../../../../../contexts/RegisterContext";
import { ValidationPassword } from "../../../../../../utils/validationInputs";
import { RegisterCardButton } from "../../../registerCard/style";
import { validate } from 'email-validator'
import React from "react";
import { api } from "../../../../../../lib/axios";
import { errorMessageTypes } from "../../../../../../errors/errorsMessages";
import { ErrorMessageContainer } from "./styles";
export function StepOne({ watch, register }: any) {
    const { isNextStep } = useContext(registerContext)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const password = watch('password')
    const confirmPassword = watch('confirmPassword')
    const email = watch('email')
    const emailValidate = validate(email)

    useEffect(() => {
        setIsValidPassword(ValidationPassword(password, confirmPassword))
    }, [password, confirmPassword, setIsValidPassword])

    function inputClick() {
        setShowPassword(!showPassword)
    }


    async function fetchRegisterData() {
        try {
            await api.post('/verify_email', {email})
            isNextStep()
        } catch (error:any) {
            const errorType = errorMessageTypes(error.response.data.type)
            setErrorMessage(errorType)
        }
    }

    return (
        <>
            {errorMessage && <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>}
            <input {...register('email')} type="e-mail" placeholder="E-mail" />
            <div>
                <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                />

                <input
                    {...register('confirmPassword')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirmar Senha"
                />

            </div>
            <div>
                <span>
                    <span> 8 caracteres mínimo,</span>
                    <span>letra maiúscula,</span>
                    <span> minúsculas, </span>
                    <span>números e carácteres especiais</span>
                </span>
            </div>
            <div>
                <Checkbox inputClick={inputClick} labelText='Mostrar Senha' />
            </div>
            <RegisterCardButton
                disabled={!isValidPassword || !emailValidate}
                onClick={fetchRegisterData}
                type="button">
                Próximo
                <ArrowRight size={24}
                    color={isValidPassword ? '#ffff' : '#B4B4B4'}
                    weight="bold"
                />
            </RegisterCardButton>
        </>
    )
}