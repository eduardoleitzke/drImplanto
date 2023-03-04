import { ISpecificPlanningProps } from "../../pages/profile/MyPlannings/components/specificPlanning"
import { PlanningContent,DescriptionContainer,DetailsAndImagesContainer,HeaderImage,ImagesContainer } from "./styles"

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
                    <ImagesContainer>
                        {specificPlanning.procedureImage.map((image) => {
                            if(image.search('.png') !== -1 || image.search('.jpeg') !== -1){
                                return (
                                    <a key={image} href={`https://api-drimplanto.s3.sa-east-1.amazonaws.com/images/${image}`} target='_blank'>
                                        <HeaderImage src={`https://api-drimplanto.s3.sa-east-1.amazonaws.com/images/${image}`} alt="" />
                                    </a>
                                )
                            }
                        
                        })}
                    </ImagesContainer>
                )}
            </DetailsAndImagesContainer>
        
        <DescriptionContainer>
            <h4>DESCRIÇÃO</h4>
            <p>{specificPlanning.procedureDetails}</p>
        </DescriptionContainer>
    </PlanningContent>
    )
}