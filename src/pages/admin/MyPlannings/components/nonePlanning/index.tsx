
import { ReactNode } from "react";
import { NonePlanningContainer } from "./styles";

interface INonePlanningProps {
    children: ReactNode
}

export function NonePlanning({children}:INonePlanningProps){
    return (
        <NonePlanningContainer>
            {children}
        </NonePlanningContainer>
    )
}