import styled from "styled-components";

export const NewPlanningContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme["gray-400"]};
    position: relative;  
`

export const NewPlanningContent = styled.div`
    padding: 7.75rem 2rem 7.75rem 4rem;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
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
    form{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
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
            width: 75%;;
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

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 2;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 2rem 4rem 2rem;
    background-color: white;
    height: 20rem;
    width: 30rem;
    position: absolute;
    right: calc(50% - 10rem);
    bottom: calc(50% - 10rem);
    border: 2px solid ${props => props.theme["gray-400"]};
    border-radius: 5px;
    
    p{
        font-size: 1.2rem;
        font-weight: 900;
        color: ${props => props.theme["gray-800"]};
        width: 100%;
        text-align: center;

    }

    div{
        display: flex;
        justify-content: space-between;
        a, button{ 
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;
            color: #fff;
            box-shadow: 10px 10px 15px #3476844D;
            width: 45%;
            padding: 0.5rem 1rem;
            border-radius: 3px;
            font-weight: bold;
            
        }

        a{
            background-color: ${props=>props.theme["blue-400"]};
        }
        button{
            background-color: red;
        }
    }
`