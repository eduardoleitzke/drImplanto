import styled from "styled-components";

export const GalleryCasesContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    border-style: solid;
    border-width: 2px;
    border-color: ${props => props.theme["gray-400"]};
    position: relative; 
    
`

export const GalleryCaseContent = styled.div`
    padding: 7.75rem 2rem 7.75rem 4rem;
    display: flex;
    width: 100%;
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

export const DateFilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    gap: 1rem;
    input{
        width: 40%;
       
    }
    p{
        width: auto;
        margin-bottom: 0rem;
        color: ${props => props.theme["gray-800"]};
        font-weight: 900;
    }
`

export const PlanningsList = styled.div`
      width: 50%;
`

export const MyPlanningsCard = styled.div`
    border-radius: 5px;
    box-shadow: 1px 1px 5px 3px #0000001A;
    padding-bottom: 1rem;
    width: 80%;
    ::-webkit-scrollbar{
        display: none;
    }
    table{
        width: 100%;
        padding: 1rem 0 0rem 1.5rem;
        thead{
            color: ${props=>props.theme["gray-800"]};
            font-weight: bold;
            tr{
                /* display: flex; */
                justify-content: space-between;
                th{
                    text-align: start;
                }
            }
        }

        tbody{
            color: ${props=>props.theme["gray-800"]};
            font-weight: 400;
            
            tr{
                width: 100;
                position: relative;
                td{                
                     padding-top: 1.5rem;
                     svg{
                        position: absolute;
                        right: 0.5rem;
                        color:${props=>props.theme["blue-400"]};
                     }
                }
            }
        }
    }
` 
