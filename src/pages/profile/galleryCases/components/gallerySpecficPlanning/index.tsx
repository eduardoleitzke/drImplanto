import { BorderTop, DescriptionContainer, FeedbackDescriptionContainer, PlanningContainer, PlanningContent, SpecificPlanningContainer } from './styles'
import { IPlanning } from '../../../../../types/IPlannings'
import { useState } from 'react'
import { Feedback } from '../../../../../components/feedbacks'
import { Planning } from '../../../../../components/planning'
import { AnsweredPlanning } from '../../../../../components/answeredPlannings'
export interface ISpecificPlanningProps {
    specificPlanning: IPlanning
}


export interface IFeedbackProps{
    procedureDetails: string;
    procedureImage: string[];
    createdAt: Date;
    planningId: string;
}




export function GallerySpecificPlanning({ specificPlanning }: ISpecificPlanningProps) {

    const [feedbacksList, setFeedbackLists] = useState<IFeedbackProps[]>([])
    return (
        <SpecificPlanningContainer>
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
                        </FeedbackDescriptionContainer>   
                    </PlanningContent>
                </PlanningContainer>
            )
            }
            
        </SpecificPlanningContainer>

    )
}