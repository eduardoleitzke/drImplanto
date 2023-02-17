import styled from "styled-components"


export const NewPlanningAndGalleyContainer = styled.div`
    width: 30%;
    height: 100%;
    
    h3{
        font-size: 2rem;
        font-weight: 900;
        color: ${props => props.theme["gray-800"]};
        width: 120%;
        margin-bottom: 1rem;
    }

    p{
        color: ${props => props.theme["gray-600"]};
        margin-bottom: 4rem;
    }
`

export const NewPlanning = styled.div`
    height: 50%;
    width: 100%;
    border-left: 3px solid rgb(218, 211, 211);
    border-bottom: 3px solid rgb(218, 211, 211);
    padding: 9.75rem 6.5rem 9.75rem 4rem;
    position: relative;
   img{
    position: absolute;
        filter: drop-shadow(30px 30px 30px rgba(0, 0, 0, 0.065));
        z-index: -1;
        top: 2rem;
        overflow: hidden;
   }
`
export const GalleryPlanning = styled.div`
    height: 50%;
    width: 100%;
    border-left: 3px solid rgb(218, 211, 211);
    border-bottom: 1px solid rgb(218, 211, 211);
    padding: 9.75rem 6.5rem 9.75rem 4rem;
    position: relative;
    overflow: hidden;
    img{
    position: absolute;
        filter: drop-shadow(30px 30px 30px rgba(0, 0, 0, 0.065));
        z-index: -1;
        top: 3rem;
        overflow: hidden;
   }
`