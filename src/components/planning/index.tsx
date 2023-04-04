import { ISpecificPlanningProps } from "../../pages/profile/MyPlannings/components/specificPlanning"
import { PlanningContent,DescriptionContainer,DetailsAndImagesContainer,HeaderImage,ImagesContainer } from "./styles"
import {ImageThumbnail} from "../thumbnailImages/ImageThumbnail"
export function Planning({specificPlanning}:ISpecificPlanningProps){
    return(
        <PlanningContent>
            <DetailsAndImagesContainer>
                <h3>{specificPlanning.procedureType}</h3>
                <p>PACIENTE  <span>{specificPlanning.patientName}</span></p>
                <p>DATA DA SOLICITAÇÃO <span>{new Date(specificPlanning.createdAt).toLocaleDateString('pt-BR')}</span></p>
                <p>STATUS <span>{specificPlanning.state}</span></p>
                <h4>IMAGENS</h4>
                {specificPlanning.procedureImage.length > 0 && (
                    <ImageThumbnail images={specificPlanning.procedureImage}/>
                )}
            </DetailsAndImagesContainer>
        
        <DescriptionContainer>
            <h4>DESCRIÇÃO</h4>
            <p>{specificPlanning.procedureDetails}</p>
        </DescriptionContainer>
    </PlanningContent>
    )
}