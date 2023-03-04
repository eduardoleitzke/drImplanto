import styled from "styled-components";

export const PlanningContainer = styled.section`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    position: relative;
    gap: 2rem;
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