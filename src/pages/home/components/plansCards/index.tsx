import { PlansCardsContainer, PlansCardContainer, PlanCard } from "./style"
import star from '../../../../assets/home/plansCards/star.svg'
export function PlansCards(){
    return (
        <PlansCardsContainer id='toPlans'>
            <h3>Planos</h3>
            <PlansCardContainer>
                <PlanCard>
                    <h4>BÁSICO</h4>
                    <p>Até 50 planejamentos por Mês</p>
                    <p>Tempo de resposta de até 2 dias</p>
                    <p>Contato direto com a equipe</p>
                    <span>R$ 50,00 Mensal</span>
                </PlanCard>
                <PlanCard>
                    <h4>PREMIUM</h4>
                    <p>Até 100 planejamentos por Mês</p>
                    <p>Resposta em até 24 horas</p>
                    <p>Contato direto com a equipe</p>
                    <span>R$ 100,00 Mensal</span>
                    <img src={star} alt="" />
                </PlanCard>
            </PlansCardContainer>
        </PlansCardsContainer>
    )
}