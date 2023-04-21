import { HomeFooterContainer, FooterInfo, Baseboard,FooterMenu, Contatcts } from "./styles"
import { FacebookLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from "phosphor-react"
import {HashLink} from 'react-router-hash-link'
import { Link } from "react-router-dom"
export function HomeFooter(){


    return (
        <HomeFooterContainer>
            <FooterInfo>
                <span>Doutor Implante</span>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                     At vero eos et accusam et.
                </p>
                <div>
                    <Link to=''><InstagramLogo color="#fff" size={30}/></Link>
                    <Link to=""><TwitterLogo weight="fill" color="#fff" size={30} /></Link>
                    <Link to=""><FacebookLogo weight="fill" color="#fff" size={30}/></Link>
                    <Link to=""><LinkedinLogo weight="fill" color="#fff" size={30}/></Link>                    
                </div>
            </FooterInfo>
            <FooterMenu>
                <span>Explorar</span>
                <HashLink to='#toHeader'>Inicio</HashLink>
                <HashLink to="#toAboutUs">Quem Somos Nós</HashLink>
                <HashLink to="#toPlannings">Planejamento Dentário</HashLink>
                <HashLink to="#toPlans">Planos</HashLink>
            </FooterMenu>
            <Contatcts>
                <span>Entre em Contato</span>
                <p>suporte@smartplanejamento.com.br</p>
                <p>(53) 9999-9999</p>
            </Contatcts>
            <Baseboard>
                <p>© Doutor Implante 2022</p>
                <nav>
                    <Link to="">Termos e Condições</Link>
                    <Link to="">Politica de Privacidade</Link>
                </nav>
            </Baseboard>
        </HomeFooterContainer>
    )
}