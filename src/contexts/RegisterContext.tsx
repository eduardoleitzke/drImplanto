import { createContext, ReactNode, useState } from "react";
import React from "react";
interface registerContextProviderProps{
    children: ReactNode
}

interface registerContextType{
    nextStep: boolean
    emailVerify: boolean
    termsOfUse: boolean
    isNextStep: () => void
    isEmailVerify: () => void
    termsOfUseAgreed: (checkValue:boolean) => void
    selectedPlan: string
    chooseSelectedPlan: (plan:string) => void
}

export const registerContext = createContext({} as registerContextType)


export function RegisterContextProvider({children}:registerContextProviderProps){
    const [nextStep, setNextStep] = useState(false)
    const [emailVerify, setEmailVerify] = useState(false)
    const [termsOfUse, setTermsOfUse] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState('')
    function isNextStep(){
        setNextStep(!nextStep)
    }

    function isEmailVerify(){
      setEmailVerify(!emailVerify)
    }

    function termsOfUseAgreed(checkValue:boolean){
      setTermsOfUse(checkValue)
    }

    function chooseSelectedPlan(plan:string){
      console.log(plan)
      setSelectedPlan(plan)
    }
    return(
      <registerContext.Provider
      value=
      {{isNextStep, nextStep, isEmailVerify, emailVerify, termsOfUse, termsOfUseAgreed,
      selectedPlan, chooseSelectedPlan}}
      >
        {children}
      </registerContext.Provider>
    )

}