import styled from "styled-components"

export const HomeHeaderContainer= styled.header`
    width: 100%;
    height: 5.125rem;
    display: flex;
    justify-content: space-between;
    padding: 5rem 10rem;
    h2{
        color: ${props => props.theme["gray-700"]};
        font-size: 2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        a{
            font-weight: bold;
            text-decoration: none;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 5px;
            height: 4rem;
            padding: 0 2.2rem;

            @media (max-width: 1400px) {
                    font-size: 1rem;
                    padding: 0 1.5rem;
                    height: 3rem
                }

                
            @media (max-width: 768px) {
                    font-size: 0.8rem;
                    padding: 0 0.5rem;
                    height: 2rem
                }
        }
        @media (max-width: 768px) {
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
           
        }
    }

    @media (max-width: 1400px) {
        font-size: 1rem;
        padding: 4rem 5rem;
        height: 3rem
        }

    @media (max-width: 768px) {
        width: 100vw;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        h2{
            font-size: 1rem;
            width: 100%;
        }



        }
`

export const HomeRegisterAncor = styled.a`
    color: ${props => props.theme["blue-400"]};

`

export const LoginAncor = styled.a`
    color: ${props => props.theme["white"]};
    background: ${props => props.theme["blue-400"]};
    box-shadow: 10px 10px 15px #3476844D;

    &:hover{
        box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
    }
`