import { PlanningContainer, BorderTop, DescriptionContainer, PlanningContent } from "./styles";

export function AnsweredPlanning(){
    return(
        <PlanningContainer>
                 <BorderTop/>
                 <PlanningContent>
                    <DescriptionContainer>
                        <h3>RESPOSTA</h3>
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</span>
                    </DescriptionContainer>
                </PlanningContent>
            </PlanningContainer>
    )
}