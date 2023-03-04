import { BorderTop, DescriptionContainer, FeedbackDescriptionContainer, PlanningContainer, PlanningContent } from './styles'
import { IPlanning } from '../../../../../types/IPlannings'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../../../../lib/axios'
import { useEffect, useState } from 'react'
import { Feedback } from '../../../../../components/feedbacks'
import { Planning } from '../../../../../components/planning'
import { AnsweredPlanning } from '../../../../../components/answeredPlannings'
export interface ISpecificPlanningProps {
    specificPlanning: IPlanning
}

const feedbackSchema = zod.object({
    description: z.string().min(20),
    images: z.any()
})

export interface IFeedbackProps{
    procedureDetails: string;
    procedureImage: string[];
    createdAt: Date;
    planningId: string;
}


type feedbackSchemaFormSchemas = z.infer<typeof feedbackSchema>

export function SpecificPlanning({ specificPlanning }: ISpecificPlanningProps) {
    const [feedbacksList, setFeedbackLists] = useState<IFeedbackProps[]>([])
    const {handleSubmit, register, formState:{isValid}} = useForm<feedbackSchemaFormSchemas>({
        resolver: zodResolver(feedbackSchema)
    })
    async function fetchFormDataToApi(data:feedbackSchemaFormSchemas) {
        const {description, images} = data
        const {_id} = specificPlanning
        const formData = new FormData()
        formData.append('description', description)
        formData.append('planningId', _id)
        if(images){
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i])     
            }
        await api.post('/create_feedback', formData ,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
        }
    }  
    
    useEffect(()=>{
        async function fetchFeedbackListToApi(){
            const {_id} = specificPlanning
            const response = await api.post('/list_feedback', {planningId: _id})
            try {
                const list = response.data
                setFeedbackLists(list)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFeedbackListToApi()
    },[])
    console.log(feedbacksList)
    return (
        <>
        <PlanningContainer>
            <Planning specificPlanning={specificPlanning}></Planning>
        </PlanningContainer>
        {specificPlanning.state !== 'answered' && 
        (
            <AnsweredPlanning></AnsweredPlanning>
        )
        }
        {feedbacksList.length > 0 && (
            <Feedback 
            procedureDetails={feedbacksList[0].procedureDetails} 
            createdAt={feedbacksList[0].createdAt}
            planningId={feedbacksList[0].planningId}
            procedureImage={feedbacksList[0].procedureImage}
            />
        )}
        {specificPlanning.state !== 'finished' && 
        (
            <PlanningContainer>
                 <BorderTop/>
                 <PlanningContent>
                    <FeedbackDescriptionContainer>
                        <form onSubmit={handleSubmit(fetchFormDataToApi)}>
                            <div>
                                <h3>PRECISA DE MAIS AJUDA?</h3>
                                <span>
                                    Caso ainda precise de mais ajuda nossa ou tirar alguma duvida em relação ao planejamento,
                                    você pode enviar mais mensagens abaixo e dar mais detalhes.
                                </span>
                                <h4>DETALHES</h4>
                                <textarea {...register('description')} cols={30} rows={10} placeholder='Envie seu feedback.'></textarea>
                                <button disabled={!isValid}>ADICIONAR RESPOSTA</button>
                            </div>
                            <div>
                                <h4>ANEXAR ARQUIVOS</h4>
                                <input {...register('images')} type="file" multiple />
                            </div>
                           
                        </form>
                    </FeedbackDescriptionContainer>   
                </PlanningContent>
            </PlanningContainer>
        )
        }
        
        </>

    )
}