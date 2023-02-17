import { AboutUsContainer, BallsImage, BrushImage, ToothImage} from "./styles"
import balls from '../../../../assets/home/aboutUs/bolinhas.svg'
import brush from '../../../../assets/home/aboutUs/brush.png'
import tooth from '../../../../assets/home/aboutUs/tooth.png'
export function AboutUs(){
    return (
        <AboutUsContainer id="toAboutUs">
            <h3>QUEM SOMOS NÓS?</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci totam architecto laboriosam explicabo, cum eligendi
                ipsam officiis vitae numquam quia sequi magni possimus,
                aliquam error dolores vero corrupti alias iusto!
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                . Explicabo expedita optio iste ut consectetur hic maxime 
                suscipit fugit deserunt, maiores, sit quo quae, alias voluptate
                m obcaecati? Dignissimos deserunt ullam corporis.
            </p>
            <BallsImage src={balls}/>
            <ToothImage src={tooth}/>
            <BrushImage src={brush}/>
        </AboutUsContainer>
    )
}