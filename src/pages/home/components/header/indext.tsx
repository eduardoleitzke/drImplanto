import {HomeHeaderContainer, HomeRegisterAncor, LoginAncor} from './styles'

  export function HomeHeader(){
    return (
        <HomeHeaderContainer id='toHeader'>
            <p>Smart Planejamento Dentário</p>
            <div>
                <HomeRegisterAncor href="/registrar">Criar Conta</HomeRegisterAncor>
                <LoginAncor href="/login">Login</LoginAncor>
            
            </div>
        </HomeHeaderContainer>
    )
  }