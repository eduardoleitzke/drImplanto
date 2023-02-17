import styled from "styled-components"


export const MyPlanningsContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    border-style: solid;
    border-width: 2px;
    border-color: ${props=>props.theme["gray-400"]};
`

export const MyPlanningsContent = styled.div`
    padding: 7.75rem 2rem 7.75rem 4rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`
