import { IFeedbackProps } from "../../pages/profile/MyPlannings/components/specificPlanning"
import { PlanningContainer, PlanningContent, DetailsAndImagesContainer, ImagesContainer, DescriptionContainer, BorderTop,HeaderImage } from "./styles"

export function Feedback({ createdAt, planningId, procedureDetails, procedureImage }: IFeedbackProps) {
    console.log(procedureImage[0])
    return (
        <PlanningContainer>
            <BorderTop />
            <PlanningContent>
                <DetailsAndImagesContainer>
                    <h3>FEEDBACK #1</h3>
                    <p>DATA DA SOLICITAÇÃO <span>{new Date(createdAt).toLocaleDateString('pt-BR')}</span></p>
                    <p>STATUS <span>Open</span></p>
                    <h4>IMAGENS</h4>
                    {procedureImage.length > 0 && (
                        <ImagesContainer>
                            {procedureImage.map((image) => {
                                if (image.search('.png') !== -1 || image.search('.jpeg') !== -1) {
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
                    <p>{procedureDetails}</p>
                </DescriptionContainer>
            </PlanningContent>
        </PlanningContainer>
    )
}