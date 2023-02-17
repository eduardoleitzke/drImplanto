import styled from "styled-components";
import * as Accordion from '@radix-ui/react-accordion';

export const BackGroundImage = styled.img`
    position: absolute;        
    filter: drop-shadow(30px 30px 30px rgba(0, 0, 0, 0.065));
    right: 40%;
    top: 20%;
    z-index: -2;
    transform: rotate(350deg);
    overflow: hidden;
    right: 5rem;
`


export const OpenPlannings = styled.div`

    flex-basis: 0;
    flex-grow: 1;
    position: relative;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }

    h2{
        font-size: 2rem;
        color: ${props=>props.theme["gray-800"]};
        font-weight: 900;
        margin-bottom: 0.5rem;
        }

    h4{
        font-size: 1.5rem;
        color: ${props=>props.theme["gray-800"]};
        font-weight: 900;
        margin: 1rem 0;
        }
  
`


export const InfoTextTittle = styled.p`
    width: 80%;
    display: inline-block;
    color: ${props=>props.theme["gray-600"]};
`


export const FinishedPlannings = styled.div`

   flex-basis: 0;
   flex-grow: 1;
   margin-right: 5rem;
   overflow: scroll;
   display: flex;
   flex-direction: column;
   position: relative;
   ::-webkit-scrollbar{
        display: none;
    }
    h4{
        font-size: 1.5rem;
        color: ${props=>props.theme["gray-800"]};
        font-weight: 900;
        margin-bottom: 1rem;
        }
   
`


export const PlanningDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
     p{
        display: flex;
        gap: 0.5rem;
        font-weight: bold;
         color: ${props=>props.theme["gray-800"]};
    }
    
    span{
        color: ${props=>props.theme["gray-600"]};
        font-weight: 400;
        font-size: 1rem;
    }

    div{
        
    }
`

export const PlanningState = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p{
        color: ${props=>props.theme["gray-800"]};
    }
    div{
        display: flex;
        flex-direction: column;
       
        p{
            color: ${props=>props.theme["blue-400"]};
            font-weight: 400;
            font-size: 1.2rem;
        }
        span{
            color: ${props=>props.theme["blue-400"]};
            font-weight: 400;
            font-size: 1rem;
            
        }
    }
`



export const AccordionContainer = styled(Accordion.Root)`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 1rem;
    width: 80%;
    p{
        margin-bottom: 0rem;
    }
`
export const AcordionCardHeader = styled(Accordion.Header)`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const AccordionContet = styled(Accordion.Item)`
    border-radius: 5px;
    box-shadow: 10px 5px 15px ${props=>props.theme["gray-300"]};
    padding:  1.5rem 1.5rem 0 1.5rem;
    background-color: #fff;
`

export const AccordionBody = styled(Accordion.Content)`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p{
        font-weight: bold;
        color: ${props=>props.theme["gray-800"]};
    }
    span{
        font-weight: 400;
        color: ${props=>props.theme["gray-600"]};
        font-size: 1rem;
        width: 100%;
    }

    img{
        max-height: 10rem;
    }

    button{
        background-color: ${props=>props.theme["blue-400"]};
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        border-radius: 5px;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom:1.5rem ;
    }
`

export const AccordionTrigger = styled(Accordion.Trigger)`
    background-color: transparent;
    cursor: pointer;
`

export const PlanningStateContent = styled.div`
    display: flex;
    gap: 3rem
`