import styled from "styled-components";

export const SpecificPlanningContainer = styled.main`
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`
export const PlanningContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    position: relative;
    gap: 2rem;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`


export const BorderTop = styled.div`
    position: absolute;
    width: 100%;
    border-top: 2px solid  ${props => props.theme["gray-400"]};
` 


export const PlanningContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 7.75rem 2rem 0 4rem;
    display: flex;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`

export const FeedbackDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form{
        margin-top: 2rem;
        width: 100%;
        display: flex;
        div{
            width: 50%;
            flex-direction: column;
            gap: 2rem;
            h4{
                margin-top: 2rem;
            }
        }
        input{
            cursor: pointer;
            border-radius: 3px;
            width: 70%;
            height: 4rem;
            padding: 1rem 1rem;
            border: 2px dashed ${props => props.theme["gray-400"]};
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
            margin-top: 2rem;
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
        h4{
            font-size: 1.5rem;
            font-weight: bold;
            color: ${props=>props.theme["gray-800"]};
            margin-bottom: 1rem;
            font-weight: 900;
        }
        h3{
        font-size: 2rem;
        font-weight: 900;
        color: ${props=>props.theme["gray-800"]};
        margin-bottom: 1rem;
        
        }
        span{
                font-size: 1rem;
                font-weight: 400;
                color: ${props=>props.theme["gray-600"]};
                line-height: 24px;
                display: block;
                max-width: 80%;
            }
`


export const DescriptionContainer = styled.div`
  max-width: 50%;
    h4{
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props=>props.theme["gray-800"]};
        margin-bottom: 1rem;
        font-weight: 900;
    }
    h3{
        font-size: 2rem;
        font-weight: 900;
        color: ${props=>props.theme["gray-800"]};   
    }
    span{
            font-size: 1rem;
            font-weight: 400;
            color: ${props=>props.theme["gray-600"]};
            line-height: 24px;
            display: block;
            max-width: 80%;
            margin-bottom: 2rem;
        }

`