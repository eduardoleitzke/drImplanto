import styled from "styled-components";

export const PlansContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('/src/assets/login/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    padding-bottom: 2rem;

    h2{
        margin-top: 4rem;
        color: white;
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        h3{
           text-align: center;
        }
    }
`;

export const PlansCardsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem 0rem;

    h3{
        font-size: 3rem;
        font-weight: 900;
        color:${props => props.theme["white"]};
        margin-bottom: 4rem;
    }

    p{
        width: 60%;
        text-align: center;
        color:${props => props.theme["gray-700"]};
    }


    @media (max-width: 768px) {
        margin: 6rem 0rem;
        
        h3{
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        p{
            width: 80%;
        }
    }
`;

export const PlansCardContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: center;
  
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const FreeTrialLink = styled.a`
    color: ${props => props.theme["gray-800"]}; 
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
`

export const AssignPlanLink = styled.a`
    
    font-family: 'MontSerrat';
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    padding: 1rem 2.2rem;
    color: ${props => props.theme["white"]};
    background: ${props => props.theme["blue-400"]};
    box-shadow: 10px 10px 15px #3476844D;

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.8rem 1.8rem;
        height: 3.5rem;
    }

    &:hover{
        box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
    }

`
export const PlanCard = styled.div`
    box-shadow: 20px 20px 30px #00000033;
    border-radius: 10px;
    padding: 4rem 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    background: #FFF;

    h4, p,span{
        width: 100%;
        text-align: center;
    }

    h4{
        font-size: 2rem;
        color: ${props => props.theme["gray-800"]};
        font-weight: 900;
    }

    p{
        padding: 1rem 0;
        width: 100%;
        color: ${props => props.theme["gray-800"]};
        font-weight: bold;
        border: solid 2px ${props => props.theme["gray-200"]};
        border-radius: 3px;
        border-top-color: transparent;
        border-right-color: transparent;
        border-left-color: transparent;
    }

    span{
        font-size: 2rem;
        color: ${props => props.theme["blue-400"]};
        padding: 1rem 0;
        font-weight: bold;
    }

    img{
        position: absolute;
        top: -0.5rem;
        left: 47%;
        
    }

    @media (max-width: 1400px) {
        padding: 4rem 1.8rem;
        
    }

    @media (max-width: 768px) {
        width: 90%;
        font-size: 1rem;
    }
`