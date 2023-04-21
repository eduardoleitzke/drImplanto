import styled from "styled-components";

export const PlanningIntroContainer= styled.section`
    width: 100%;
    display: flex;
    padding: 5rem 10rem;
    justify-content: space-between;
    margin: 10rem 0rem;

    @media (max-width: 1400px) {
        margin: 5rem 0rem;
        padding: 5rem 5rem;
        img{
            width: 48%;
            height: 60%;
        }
    }

    @media (max-width: 767px) {
            height: auto;
            justify-content: center;
            align-items: center;
            margin-top: 0rem;
            img{
                display: none;
            }
        }
`

export const PlanningIntroContet = styled.div`
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        position: relative;
        @media (max-width: 1400px) {
                height: 30rem;
            }
       
       
        h3{
            width: 80%;
            font-size: 2.5rem;
            font-weight: 900;
            color:${props => props.theme["gray-700"]};
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-left: 5rem;
            @media (max-width: 1400px) {
                font-size: 2rem;
                width: 110%;
            }
            @media (max-width: 767px) {
                width: 100%;
                justify-content: center;
                margin-left: 0rem;
                text-align: center;
         }
    }
        

        div{
            color:${props => props.theme["gray-800"]};
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 1rem;
            width: 80%;
            margin-left: 6rem;
            @media (max-width: 1400px) {
                align-items: center;
            }
            @media (max-width: 767px) {
                flex-direction: center;
                align-items: center;
                width: 100%;
                margin: 0;
            }

            p{
                @media (max-width: 1400px) {
                    font-size: 0.875rem;
                }
                @media (max-width: 767px) {
                    font-size: 1rem;
                    text-align: center;
                }
            }
            span{
                font-weight: bold;
                span{
                    color:${props => props.theme["blue-400"]};
                    text-decoration: underline;
                    
                }
                @media (max-width: 1400px) {
                font-size: 0.875rem;
                }
            }
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
                position: absolute;
                bottom: 0;
                left: 10rem;
                @media (max-width: 1400px) {
                    font-size: 1rem;
                    padding: 0 1rem;
                }
                @media (max-width: 767px) {
                    font-size: 1rem;
                    padding: 1rem;
                    position: static;
                    width: 90%;
                    justify-content: space-between;
                }


                &:hover{
                    box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
                }
            }
`