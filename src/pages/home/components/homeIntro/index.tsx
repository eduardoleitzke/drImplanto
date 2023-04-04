import { HomeIntroContainer, HomeIntroContent, HomeIntroContentWriting,HomeIntroContentButtons, RegisterButton, PlansButton, HashLinkButton } from "./style"
import IntroImage from '../../../../assets/home/homeIntro/HomeIntroImage.png'
import { HashLink } from 'react-router-hash-link'
import { ArrowRight } from "phosphor-react"
export function HomeIntro(){
    return (
        <HomeIntroContainer>
            <HomeIntroContent>
                <HomeIntroContentWriting>
                    <h2>AJUDAMOS VOCÊ A <span>PLANEJAR</span> SEUS IMPLANTES DENTÁRIOS</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam.
                    </p>
                </HomeIntroContentWriting>
                <HomeIntroContentButtons>
                    <RegisterButton href="/registrar">Criar Conta <ArrowRight color="#fff" size={28} weight='bold' /></RegisterButton>
                    <HashLinkButton to="#toPlans">Ver Planos</HashLinkButton>
                </HomeIntroContentButtons>
            </HomeIntroContent>
            <img src={IntroImage} alt="" />
        </HomeIntroContainer>
    )
}