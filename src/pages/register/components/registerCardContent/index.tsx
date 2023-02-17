import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { errorMessageTypes } from '../../../../errors/errorsMessages';
import { useContext, useState } from "react";
import { registerContext } from "../../../../contexts/RegisterContext";
import { StepOne } from "./components/stepOne";
import { StepTwo } from './components/stepTwo';
import { api } from '../../../../lib/axios';
import { ErrorMessageContainer } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  name: z.string().min(3),
  lastName: z.string().min(3),
  birthday: z.string().min(10),
  cpf: z.string().length(11),
  phone: z.string().length(11),

}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirm"], // path of error
})
type newRegisterStepOneFormInputs = z.infer<typeof registerSchema>

export function RegisterCardContent() {
  const { nextStep, isEmailVerify } = useContext(registerContext)
  const [errorMessage, setErrorMessage] = useState('')
  const { register, handleSubmit, watch, formState: { isValid, errors } } = useForm<newRegisterStepOneFormInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
      email: '',
      name: '',
      lastName: '',
      cpf: '',
      phone: '',

    },
  })


  async function fetchRegisterData(data: newRegisterStepOneFormInputs) {
    try {
      const resolve = await api.post('/create_user', data)
      isEmailVerify()
    } catch (error:any) {
      const errorType = errorMessageTypes(error.response.data.type)
      setErrorMessage(errorType)
    }
  }

  return (
    <form onSubmit={handleSubmit(fetchRegisterData)}>
      { errorMessage &&
        (
          <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
        )
          
      }
      { nextStep ? 
          (
            <StepTwo errors={errors} watch={watch} register={register} isValid={isValid} />
          )
        : 
          (
            <StepOne watch={watch} register={register} />
          )
      }
    </form>
  )
}