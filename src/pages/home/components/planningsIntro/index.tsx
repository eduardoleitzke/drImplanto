import { PlanningIntroContainer,PlanningIntroContet } from "./styles"
import PlanningIntroImage from '../../../../assets/home/plannigIntro/planningImage.png'

import { ArrowRight } from "phosphor-react"
export function PlanningIntro(){
    return (
        <PlanningIntroContainer id="toPlannings">
            <img src={PlanningIntroImage} alt="" />
            <PlanningIntroContet>
                <h3>PLANEJAMENTO DENTÁRIO</h3>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                    </p>

                    <span>
                        Nós fornecemos apenas o planejamento e auxilio teórico nos implantes, a cirurgia é 
                        <span> responsabilidade total do profissional </span>que irá realiza-la.
                    </span>
                </div>
                <a href="/">Ver Planos <ArrowRight color="#fff" size={28} weight='bold' /></a>
            </PlanningIntroContet>
        </PlanningIntroContainer>
    )
}