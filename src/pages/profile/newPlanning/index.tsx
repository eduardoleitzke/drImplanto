import { Menu } from "../components/menu";
import { NewPlanningContainer, NewPlanningContent, FirstFormColumn, SecondFormColumn, ModalContainer, ModalContent } from "./styles";
import { UploadSimple } from "phosphor-react";
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { api } from "../../../lib/axios";
import { useNavigate } from "react-router-dom";
const newPlanningSchema = z.object({
    details: z.string().min(25),
    name: z.string().min(3),
    type: z.enum(['Implante dentário', 'Extração']),
    images: z.any()
})
type newPlanningSchemaFormInputs = z.infer<typeof newPlanningSchema>
export function NewPlanning() {
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const { validToken, loggedUser } = useContext(UserContext)
    const { register, handleSubmit, formState: { isValid, errors } } = useForm<newPlanningSchemaFormInputs>({
        resolver: zodResolver(newPlanningSchema),
        defaultValues: {
            details: '',
            name: '',
            type: 'Implante dentário'
        },
    })
    async function fetchToApi(data: newPlanningSchemaFormInputs) {
       console.log(data.images)
        const { details, name, type, images } = data
        const userId = loggedUser.id
        const formData = new FormData()
        formData.append('details', details)
        formData.append('name', name)
        formData.append('type', type)
        formData.append('userId', userId)
        if(images){
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i])     
            }
              
        }
        await api.post('/create_planning', formData ,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }}
            )
            .then(()=> navigate('../profile/meus-planejamentos', {replace: true}))
            .catch(()=> setIsError(true))
          
    }
    console.log(errors)
    return (
        <>
            {isError && (
                <ModalContainer>
                    <ModalContent>
                        <p>SEUS PLANEJAMENTOS ESGOTARAM!</p>
                        <div>
                            <a href='/planos'>Assinar novo plano</a>
                            <button onClick={()=>setIsError(false)}>Fechar</button>
                        </div>
                    </ModalContent>
                </ModalContainer>
            )}
            {validToken &&
                (
                    <NewPlanningContainer>
                        <Menu />
                        <NewPlanningContent>
                            <form onSubmit={handleSubmit(fetchToApi)}>
                                <FirstFormColumn>
                                    <h3>NOVO PLANEJAMENTO</h3>
                                    <p>Aqui você pode entrar com os dados do procedimento para solicitar um novo planejamento. Assim que os dados forem processados, eles podem ser acessados na pagina de "meus planejamentos" disponível no menu lateral.</p>
                                    <div>
                                        <span>NOME DO PACIENTE</span>
                                        <input {...register('name')} type="text" placeholder="Insira aqui o nome de seu paciente" />
                                    </div>
                                    <div>
                                        <span>TIPO DE PROCEDIMENTO</span>
                                        <select {...register("type")}>
                                            <option value="Implante dentário" key="1">Implante Dentário</option>
                                            <option value="Extração" key="2">Extração</option>

                                        </select>
                                    </div>
                                    <div>
                                        <span>DETALHES</span>
                                        <textarea {...register("details")} cols={30} rows={10} placeholder='Descreva seu procedimento/dúvidas detalhadamente.'></textarea>
                                    </div>
                                    <button disabled={!isValid}>Novo planejamento</button>
                                </FirstFormColumn>
                                <SecondFormColumn>
                                    <span>ANEXAR IMAGENS</span>
                                    <input {...register('images')} type="file" placeholder="Fazer upload de novas imagens" multiple />
                                    <UploadSimple size={32} weight='bold' />
                                </SecondFormColumn>
                            </form>
                        </NewPlanningContent>
                    </NewPlanningContainer>
                )
            }
        </>

    )
}