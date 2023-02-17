import { ArrowRight } from "phosphor-react";
import { ChangeEvent, FormEvent, InputHTMLAttributes } from "react";
import { Checkbox } from "../../../../../../components/checkbox";
import { RegisterCardButton } from "../../../registerCard/style";
import { useContext } from "react";
import { registerContext } from "../../../../../../contexts/RegisterContext";
import React from "react";
export function StepTwo({register, watch, isValid, errors}:any){
    const {termsOfUse} = useContext(registerContext)
    return (
        
            <>
                <div>
                    <input {...register('name')} type='text'placeholder="Nome"/>
                    <input {...register('lastName')} type='text' placeholder="Sobrenome"/>
                </div>
                <input {...register('birthday')}  type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")} placeholder="Data de Nascimento"/>
                <input maxLength={11}  minLength={11} {...register('cpf')} type="text" placeholder="CPF"/>
                <input maxLength={11}  minLength={11}  {...register('phone')} type="text" placeholder="DDD e Telefone"/>
                <div>
                    <Checkbox labelText='Concordo e aceito os termos de contrato'/>
                </div>
                <RegisterCardButton
                disabled={!isValid || !termsOfUse}
                type="submit"
                >
                    Registra-se 
                    <ArrowRight size={24}
                    color={isValid ? '#ffff' : '#B4B4B4'} 
                    weight="bold"
                />
                </RegisterCardButton>  
        </>
        
    )
}