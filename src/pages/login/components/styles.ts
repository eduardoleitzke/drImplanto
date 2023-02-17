import styled from "styled-components";

interface ILoginCardContainerProps {
    inputBorderColor?: string
    fontInputColor?: string
}

export const LoginCardContainer = styled.div<ILoginCardContainerProps>`
    width: 38.5rem;
    background-color: white;
    border-radius: 5px;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;

    header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        h3{
            font-size: 3rem;
            color: #3E3E3E;
            text-align: center;
            font-weight: 900;
         }

        p{
            font-size: 1rem;    
            line-height: 1.5rem;
            color: #B4B4B4;
            width: 60%; 
            text-align: center;
        }
    }

    form{
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 0 3.4rem;

            input[type=text], input[type=password]{
                width: 100%;
                height: 3.4rem;
                font-size: 1rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
                border-radius: 5px;
                border: 2px solid ${props=>props.inputBorderColor};
                background-color: ${props=>props.theme["gray-100"]};
                color: ${props=>props.fontInputColor};
                padding-left: 2rem;
                outline: none;

                &::placeholder{
                    color: ${props=>props.theme['gray-700']};
                }
            }
            button[type=submit]{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: start;
                padding: 0 2rem;
                margin-top: 2rem;
                font-weight: bold;
                font-size: 1.5rem;
                background-color: #21B1D6;
                color: white;
                height: 4rem;
                border-radius: 5px;
                box-shadow: 0px 20px 40px rgb(14 84 100 / 30%);
                cursor: pointer;

                &:hover{
                    box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
                }

                
                &:disabled{
                    cursor: not-allowed;
                    background-color: ${props=>props.theme["gray-100"]};
                    color: ${props=>props.theme["gray-600"]};
                    box-shadow: none;   
                }

                &:not(:disabled):hover{
                    box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
                }
            }
            div{
                display: flex;
                align-items: center;
                gap: 1rem;

                label{
                    color: ${props=>props.theme["gray-700"]};
                    font-weight: bold;
                }
            }
        }   
        nav{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 1.5rem;
            color: ${props=>props.theme["gray-700"]};
            text-align:center;
            margin-bottom: 4rem;
            a{
                color: ${props=>props.theme["blue-400"]};
                font-weight: bold;
            }         
        }    
`




