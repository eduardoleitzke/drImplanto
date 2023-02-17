import styled from "styled-components";

export const NonePlanningContainer = styled.div`
    padding: 1.5rem;
    border-radius: 5px;
    border: 1px dashed ${props=>props.theme["gray-600"]};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3{
        font-size: 1.8rem;
        font-weight: 900;
        color: ${props=>props.theme["gray-300"]};
        max-width: 70%;
    }

    p{
        color: ${props=>props.theme["gray-600"]};
    }

`

