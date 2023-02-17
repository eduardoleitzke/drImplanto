import { DescriptionContainer, DetailsAndImagesContainer, HeaderImage, ImagesContainer, PlanningContainer} from './styles'
import { IPlanning } from '../../../../../types/IPlannings'
interface ISpecificPlanningProps{
    specificPlanning: IPlanning
}

export function SpecificPlanning({specificPlanning}:ISpecificPlanningProps) {
    console.log(specificPlanning)
    return (
        <PlanningContainer>
            <DetailsAndImagesContainer>
                <h3>{specificPlanning.procedureType}</h3>
                <p>PACIENTE  <span>{specificPlanning.patientName}</span></p>
                <p>DATA DA SOLICITAÇÃO <span>{new Date(specificPlanning.createdAt).toLocaleDateString('pt-BR')}</span></p>
                <p>STATUS <span>{specificPlanning.state}</span></p>
                <h4>IMAGENS</h4>
                 {specificPlanning.procedureImage.length > 0 && (
                        <ImagesContainer>
                            <HeaderImage src={`../../../../../../server/tmp/images/${specificPlanning.procedureImage[0]}`} alt="" />
                            {specificPlanning.procedureImage.length > 2 && (
                                  <div>
                                  <img src={`../../../../../../server/tmp/images/${specificPlanning.procedureImage[1]}`} alt="" />
                                  <img src={`../../../../../../server/tmp/images/${specificPlanning.procedureImage[2]}`} />
                              </div>
                            )}             
                        </ImagesContainer>
                        )}            
            </DetailsAndImagesContainer>
            <DescriptionContainer>
                <h4>DESCRIÇÃO</h4>
                <p>{specificPlanning.procedureDetails}</p>
            </DescriptionContainer>
        </PlanningContainer>
    )
}