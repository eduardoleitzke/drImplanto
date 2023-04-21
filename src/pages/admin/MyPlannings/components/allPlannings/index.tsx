import { CaretDown } from "phosphor-react"
import React, { useContext, useEffect, useState } from "react"
import backGroungImage from '../../../../../assets/profile/backgrounds/backgroundMyPlannings.svg'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { formatDistanceToNow } from 'date-fns'
import { UserContext } from "../../../../../contexts/UserContext"
import { api } from "../../../../../lib/axios"
import { AccordionContainer, AccordionBody, AccordionContet, AccordionTrigger, AcordionCardHeader, PlanningState, PlanningDetails, OpenPlannings, FinishedPlannings, BackGroundImage, InfoTextTittle, PlanningStateContent } from "./styles"
import { NonePlanning } from "../nonePlanning"
import { IPlanning } from "../../../../../types/IPlannings"
import { PlanningContent } from "../specificPlanning/styles"
interface IAllPlanningsProps {
    showAll: boolean
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>
    setSpecificplanning: React.Dispatch<React.SetStateAction<IPlanning>>
}



export function AllPlannings({ showAll, setShowAll, setSpecificplanning }: IAllPlanningsProps) {
    const { loggedUser } = useContext(UserContext)
    const [listOfPlannings, setListOfPlannings] = useState([])
    var verifyIfIsEmpty = [0, 0]
    listOfPlannings.forEach((planning: IPlanning) => {
        if (planning.state === 'open' || planning.state === 'answered') {
            verifyIfIsEmpty[0] = verifyIfIsEmpty[0] + 1
        }
        if (planning.state === 'finished') {
            verifyIfIsEmpty[1] = verifyIfIsEmpty[1] + 1
        }
    })
    // useEffect(() => {
    //     async function fetchToApi() {
    //         const resolve = await api.post('/list_plannings', { userId: loggedUser.id })
    //         try {
    //             setListOfPlannings(resolve.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     fetchToApi()
    // }, [loggedUser, setListOfPlannings])
    return (
        <>
            <BackGroundImage src={backGroungImage} alt="" />
            <OpenPlannings>
                <h2>MEUS PLANEJAMENTOS</h2>
                <InfoTextTittle>Veja a lista com todos os planejamentos que foram solicitados, tanto os pendentes, quanto os que já foram respondidos.</InfoTextTittle>
                <h4>EM ABERTO</h4>
                <AccordionContainer type="multiple">
                    {verifyIfIsEmpty[0] === 0 && (
                        <NonePlanning>
                            <h3>NENHUM PLANEJAMENTO EM ABERTO</h3>
                            <p>
                                Você pode criar novos planejamentos acessando a
                                pagina de novos planejamentos no menu lateral.
                            </p>
                        </NonePlanning>
                    )}
                    {listOfPlannings.map((planning: IPlanning, index: number) => {
                        if (planning.state === 'open' || planning.state === 'answered') {
                            return <AccordionContet key={planning._id} value={`item-${index}`}>
                                <AcordionCardHeader>
                                    <PlanningDetails>
                                        <p>PACIENTE  <span>{planning.patientName}</span></p>
                                        <p>DATA DA SOLICITAÇÃO <span>{new Date(planning.createdAt).toLocaleDateString('pt-BR')}</span></p>
                                        <p>PROCEDIMENTO <span>{planning.procedureType}</span></p>
                                    </PlanningDetails>
                                    <PlanningStateContent>
                                        <PlanningState>
                                            <p>STATUS</p>
                                            <div>
                                                <p>{planning.state === 'open' ? 'Aberto' : 'Respondido'}</p>
                                                <span>{formatDistanceToNow(new Date(planning.createdAt), {
                                                    addSuffix: true,
                                                    locale: ptBR,
                                                })}</span>
                                            </div>
                                        </PlanningState>
                                        <AccordionTrigger>
                                            <CaretDown size={32} color='#21B1D6' weight='bold' />
                                        </AccordionTrigger>
                                    </PlanningStateContent>
                                </AcordionCardHeader>
                                <AccordionBody>
                                    <p>DESCRIÇÃO</p>
                                    <span>
                                        {
                                            planning.procedureDetails.length > 120 ?
                                                planning.procedureDetails.slice(0, 160) + '...' :
                                                planning.procedureDetails
                                        }
                                    </span>
                                    <button type="button" onClick={() => { setSpecificplanning(planning), setShowAll(!showAll) }}>Ver Planejamento</button>
                                </AccordionBody>
                            </AccordionContet>
                        }
                        else return null
                    })}

                </AccordionContainer>
            </OpenPlannings>
            <FinishedPlannings>
                <h4>CONCLUIDOS</h4>
                <AccordionContainer type="multiple">
                    {verifyIfIsEmpty[1] === 0 && (
                        <NonePlanning>
                            <h3>NENHUM PLANEJAMENTO CONCLUÍDO</h3>
                            <p>
                                A lista de concluídos ainda está sem nenhum planejamento, você ainda
                                precisa ou abrir um planejamento ou esperar os que estão abertos serem
                                concluídos
                            </p>
                        </NonePlanning>
                    )}
                    {listOfPlannings.map((planning: IPlanning, index: number) => {
                        if (planning.state === 'finished') {
                            return <AccordionContet key={planning._id} value={`item-${index}`}>
                                <AcordionCardHeader>
                                    <PlanningDetails>
                                        <p>PACIENTE  <span>{planning.patientName}</span></p>
                                        <p>DATA DA SOLICITAÇÃO <span>{new Date(planning.createdAt).toLocaleDateString('pt-BR')}</span></p>
                                        <p>PROCEDIMENTO <span>{planning.procedureType}</span></p>
                                    </PlanningDetails>
                                    <PlanningStateContent>
                                        <PlanningState>
                                            <p>STATUS</p>
                                            <div>
                                                <p>{planning.state === 'finished' && 'Finalizado'}</p>
                                                <span>{formatDistanceToNow(new Date(planning.createdAt), {
                                                    addSuffix: true,
                                                    locale: ptBR,
                                                })}</span>
                                            </div>
                                        </PlanningState>
                                        <AccordionTrigger>
                                            <CaretDown size={32} color='#21B1D6' weight='bold' />
                                        </AccordionTrigger>
                                    </PlanningStateContent>
                                </AcordionCardHeader>
                                <AccordionBody>
                                    <p>DESCRIÇÃO</p>
                                    <span>
                                        {
                                            planning.procedureDetails.length > 30 ?
                                                planning.procedureDetails.slice(0, 160) + '...' :
                                                planning.procedureDetails
                                        }
                                    </span>
                                    <button type="button" onClick={() => { setSpecificplanning(planning), setShowAll(!showAll) }}>Ver Planejamento</button>
                                </AccordionBody>
                            </AccordionContet>
                        }
                        else return null
                    })}

                </AccordionContainer>
            </FinishedPlannings>
        </>
    )
}