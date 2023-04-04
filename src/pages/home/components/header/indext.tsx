import {HomeHeaderContainer, HomeRegisterAncor, LoginAncor} from './styles'

  export function HomeHeader(){
    return (
        <HomeHeaderContainer id='toHeader'>
            <h2>DR. IMPLANTO</h2>
            <div>
                <HomeRegisterAncor href="/registrar">Criar Conta</HomeRegisterAncor>
                <LoginAncor href="/login">Login</LoginAncor>
            
            </div>
        </HomeHeaderContainer>
    )
  }