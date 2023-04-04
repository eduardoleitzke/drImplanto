import React, { useContext, useState, useEffect } from "react";
import {useNavigate, useSearchParams } from "react-router-dom";
import { PlansContainer, PlanCard, PlansCardContainer, PlansCardsContainer, FreeTrialLink, AssignPlanLink } from "./styles"
import { UserContext } from "../../contexts/UserContext";
import starIcon from '../../assets/home/plansCards/star.svg'

import { api } from "../../lib/axios";



export function Plans() {
    const { validToken, loggedUser} = useContext(UserContext)
    const [searchParams, ] = useSearchParams()
    const paymentId = searchParams.get('preapproval_id')
    const navigate = useNavigate()
    useEffect(() => {
        if (paymentId) {
            async function fetchToApi() {
                const userId = loggedUser.id
                console.log(loggedUser)
                const { data } = await api.post('/create_payment', { paymentId, userId })
                
                try {
                    navigate('/profile')
                } catch (error) {
                    console.log(error)
                }
            }

            fetchToApi()
        }

    }, [loggedUser])

    return (
        <PlansContainer>
            {validToken ?
                (
                    <PlansCardsContainer>
                        <h3>ESCOLHA SEU PLANO</h3>
                        
                        <PlansCardContainer>
                            <PlanCard>
                                <h4>PREMIUM</h4>
                                <p>Até 5 planejamentos por Mês</p>
                                <p>Resposta em até 24 horas</p>
                                <p>Contato direto com a equipe</p>
                                <p>Acesso a galeria de casos</p>
                                <p>2 feedback por planejamento</p>
                                <span>R$ 100,00 Mensal</span>
                                <img src={starIcon} alt="" />
                                <AssignPlanLink href='https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848635e2cd01864bbe4e4515c6' type="button">ASSINAR PLANO</AssignPlanLink>
                                <FreeTrialLink>Assine uma demonstração gratuita</FreeTrialLink>
                            </PlanCard>
                            <PlanCard>
                                <h4>BÁSICO</h4>
                                <p>Até 2 planejamentos por Mês</p>
                                <p>Tempo de resposta de até 2 dias</p>
                                <p>Contato direto com a equipe</p>
                                <span>R$ 59,99 Mensal</span>
                                <AssignPlanLink href='https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848635e2cd01864bbe4e4515c6' type="button">ASSINAR PLANO</AssignPlanLink>
                                <FreeTrialLink>Assine uma demonstração gratuita</FreeTrialLink>
                            </PlanCard>
                            
                            {/* <PlanCard>
                                <h4>FREE TRIAL</h4>
                                <p>1 planejamento grátis</p>
                                <p>Resposta em até 2 dias</p>
                                <span>GRÁTIS</span>
                                <button type="button">ASSINAR PLANO</button>
                            </PlanCard> */}
                        </PlansCardContainer>
                    </PlansCardsContainer>
                )
                :
                (
                    <></>
                )
            }
        </PlansContainer>
    )
}