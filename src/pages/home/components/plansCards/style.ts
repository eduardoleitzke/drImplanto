import styled from "styled-components";

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
         color:${props => props.theme["gray-700"]};
         margin-bottom: 4rem;
        }
    p{
        width: 40%;
        text-align: center;
        color:${props => props.theme["gray-700"]};
    }
    a{
        font-weight: bold;
                text-decoration: none;
                font-size: 1.5rem;
                display: flex;
                gap: 1rem;
                align-items: center;
                cursor: pointer;
                border-radius: 5px;
                height: 4rem;
                padding: 0 2.2rem;
                color: ${props => props.theme["white"]};
                background: ${props => props.theme["blue-400"]};
                box-shadow: 10px 10px 15px #3476844D;
                margin-top: 3rem;

                @media (max-width: 1400px) {
                    font-size: 1rem;
                    left: 2.5rem;
                    padding: 0 1rem;
                    height: 3.5rem
                }

                &:hover{
                    box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
                }
    }

`

export const PlansCardContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
`


export const PlanCard = styled.div`
    height: 24.5rem;
    width: 22.81rem;
    box-shadow: 20px 20px 30px #00000033;
    border-radius: 10px;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
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
        color: ${props => props.theme["gray-800"]};
        padding: 1rem 0;
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
`