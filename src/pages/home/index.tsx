import { HomeContainer} from "./styles"
import { HomeHeader } from "./components/header/indext"
import { HomeIntro } from "./components/homeIntro"
import { AboutUs } from "./components/aboutUs"
import { PlanningIntro } from "./components/planningsIntro"
import { PlansCards } from "./components/plansCards"
import { HomeFooter } from "./components/footer"
export function Home(){

    return (
        <HomeContainer>
            <HomeHeader/>
            <HomeIntro/>
            <AboutUs/>
            <PlanningIntro/>
            <PlansCards/>
            <HomeFooter/>
        </HomeContainer>
    )
}