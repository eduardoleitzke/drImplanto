import styled from "styled-components";

export const ContactUsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme["gray-400"]};
    position: relative; 
    
`

export const ContactUsContent = styled.div`
    padding: 7.75rem 2rem 7.75rem 4rem;
    display: flex;
    width: 100%;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    
    form{

        h3{
            font-size: 2rem;
            font-weight: 900;
            color: ${props => props.theme["gray-800"]};
            margin-bottom: 1rem;
        }
        p{
            color: ${props => props.theme["gray-600"]};
            width: 75%;
            margin-bottom: 2rem;
        }
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        span{
            font-size: 1.5rem;
            font-weight: 900;
            color: ${props => props.theme["gray-800"]};
            display: block;
            margin-bottom: 1rem;
        }

        div{
            margin-bottom:2rem ;
        }

        input, select{
            border-radius: 3px;
            width: 75%;
            padding: 1rem 1rem;
            border: 2px solid ${props => props.theme["gray-400"]};
            outline: none;
            color: ${props => props.theme["gray-800"]};
            font-size: 1rem;
            ::placeholder{
                color: ${props => props.theme["gray-400"]};
            }
        }

        textarea{
            width: 75%;
            height: 15rem;
            border: none;
            border: 2px solid ${props => props.theme["gray-400"]};
            outline: none;
            padding: 1rem;
            font-size: 1rem;            
            font-family: 'MontSerrat';
            resize: none;
            }
           button{
            background-color: ${props => props.theme["blue-400"]};
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            margin-bottom:1.5rem ;
            width: 30%;
            
            &:hover{
                    box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
                }

                
                &:disabled{
                    cursor: not-allowed;
                    background-color: ${props => props.theme["gray-100"]};
                    color: ${props => props.theme["gray-600"]};
                    box-shadow: none;   
                }

                &:not(:disabled):hover{
                    box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
                }
           }
           input[type= file]{
        border: 2px dashed ${props => props.theme["gray-400"]};
        cursor: pointer;
            
        }
        input[type=file]::file-selector-button {
            display: none;
        }
        svg{
            position: absolute;
            bottom:calc(85% + 16px);
            left: 70%;
            color: ${props => props.theme["gray-400"]};
        }     
    }   
`

export const FirstFormColumn = styled.div`
    width: 50%;
    `

export const SecondFormColumn = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    input[type= file]{
        border: 2px dashed ${props => props.theme["gray-400"]};
        cursor: pointer;
        
    }
    input[type=file]::file-selector-button {
        display: none;
    }
    svg{
        position: absolute;
        bottom:calc(85% + 16px);
        left: 70%;
        color: ${props => props.theme["gray-400"]};
    }
   
`

export const TicketList = styled.div`
    width: 50%;
    h4{
        font-size: 2rem;
        font-weight: 900;
        color: ${props => props.theme["gray-800"]};
        margin-bottom: 1rem;
    }
`