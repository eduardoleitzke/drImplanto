import {GalleryPlanning, NewPlanning, NewPlanningAndGalleyContainer} from './styles'
import backgroundNewPlannings from '../../../../assets/profile/backgrounds/backgroundNewPlannings.svg'
import backgroundGallery from '../../../../assets/profile/backgrounds/backgroundGallery.svg'
export function NewPlanningAndGallery(){
    return(
        <NewPlanningAndGalleyContainer>
            <NewPlanning>
                <img src={backgroundNewPlannings} alt="" />
                <h3>NOVO PLANEJAMENTO</h3>
                <p>NOVO Através do botão abaixo ou do menu lateral, você pode acessar a seção para solicitar um novo planejamento.</p>
                <button>Novo Planejamento</button>
            </NewPlanning>
            <GalleryPlanning>
                <img src={backgroundGallery} alt="" />
                <h3>GALERIA DE CASOS</h3>
                <p>Ao clicar no botão abaixo ou através do menu lateral, você pode visualizar uma galeria com todos os casos que já auxiliamos.</p>
                <button>Ver Galeria de Casos</button>
            </GalleryPlanning>
        </NewPlanningAndGalleyContainer>
    )
}