import styled from "styled-components";

export const PlanningContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 7.75rem 2rem 0 4rem;
    display: flex;
`
export const DetailsAndImagesContainer = styled.div`
overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
width: 50%;
   h3{
    font-size: 2rem;
    font-weight: 900;
    color: ${props=>props.theme["gray-800"]};
    margin-bottom: 1rem;
    
    }
    h4{
        font-size: 1.5rem;
        font-weight: 900;
        color: ${props=>props.theme["gray-800"]};
        margin-bottom: 1rem;
        margin-top: 2rem;
    }
    p{
        font-size: 1rem;
        font-weight: bold;
        color: ${props=>props.theme["gray-800"]};
        margin-bottom: 0.75rem;
        span{
            font-size: 1rem;
            font-weight: 400;
            color: ${props=>props.theme["gray-600"]};
        }
    }
`

export const ImagesContainer = styled.div`
    width: 40rem;
    height: 30rem;
    div{
        display: flex;
        gap: 1rem;
    img{
        width: 100%;
        height: 7.5rem;
        }
    }
`


export const HeaderImage = styled.img`
    width: 100%;
    height: 15rem;
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
    p{
            font-size: 1.2rem;
            font-weight: 400;
            color: ${props=>props.theme["gray-600"]};
            line-height: 24px;
            display: block;
            max-width: 80%;
            margin-bottom: 2rem;
        }

`