import { MenuContainer, LoggoutButton } from "./styles"
import iconContact from '../../../../assets/profile/icons/iconContact.svg'
import iconGallery from '../../../../assets/profile/icons/iconGallery.svg'
import iconGear from '../../../../assets/profile/icons/iconGear.svg'
import iconHome from '../../../../assets/profile/icons/iconHome.svg'
import iconNewPlanning from '../../../../assets/profile/icons/iconNewPlanning.svg'
import iconMyPlannings from '../../../../assets/profile/icons/iconMyPlannings.svg'
import { SignOut } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
export function Menu(){
    const navigate = useNavigate()
    const cookie = new Cookies()
    function logout(){
        cookie.remove('authorization_token')
        setTimeout(() => {
            navigate('/')
        }, 500);
        
    }
    return (
       <MenuContainer>
            <p>DRI</p>
            <ul>
                <li><a href="/admin"><img src={iconHome}/></a></li>
                <li><a href="/admin/planejamentos"><img src={iconMyPlannings}/></a></li>
                <li><a href="/admin/usuários"><img src={iconNewPlanning}/></a></li>
                <li><a href="/admin/galeria"><img src={iconGallery}/></a></li>
                <li><a href=""><img src={iconGear}/></a></li>
            </ul>
            <LoggoutButton onClick={logout}>
               <SignOut size={36} weight='bold'/>
            </LoggoutButton>
                               
       </MenuContainer>
    )
}