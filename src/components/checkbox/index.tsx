import { CheckBoxIndicator, CheckboxRoot } from "./styles"
import { Check } from "phosphor-react"
import { registerContext } from "../../contexts/RegisterContext"
import React, {useContext, useState} from "react"

interface CheckboxProps{
    labelText: string,
    
    inputClick?: () => void
}

export function Checkbox({labelText,inputClick}:CheckboxProps){
    const {termsOfUseAgreed, termsOfUse, selectedPlan, chooseSelectedPlan} = useContext(registerContext)

    
    return (
        <div>
        <CheckboxRoot onCheckedChange={(check:boolean)=>{termsOfUseAgreed(check)}}>
            <CheckBoxIndicator>
                <Check  weight="bold" size={24} color='#21B1D6'/>
            </CheckBoxIndicator >
        </CheckboxRoot>
        <label>{labelText}</label>
    </div>
    )
}