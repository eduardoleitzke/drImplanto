import styled from "styled-components";


export const AboutUsContainer = styled.section`
    width: 100%;
    height: 39.31rem;
    background: ${props => props.theme["blue-400"]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: relative;
   

    h3{
        font-size: 3rem;
        color:  ${props => props.theme["white"]};
        font-weight: 900;
        @media (max-width: 1400px) {
            font-size: 2rem;
        }
    }

    p{
        color:  ${props => props.theme["white"]};
        width: 30%;
        display: flex;
        text-align: center;
        line-height: 24px;
        @media (max-width: 1400px) {
            font-size: 1rem;
            line-height: 1.5;
            width: 50%
        }
        @media (max-width: 767px) {
           width: 90%;
        }
    }
    

    img{
        position: absolute;
        @media (max-width: 1400px) {
            right: 5rem;
        }
        @media (max-width: 767px) {
           display: none;
        }

    }
`

export const BallsImage = styled.img`
    right: 10rem;
    top: 4rem;
`

export const ToothImage = styled.img`
    right: 6rem;
    bottom: -13rem;

    @media (max-width: 1400px) {
            width: 25%;
            bottom: -10rem;
        }
    
`

export const BrushImage = styled.img`
  left: 0;
  bottom: 0;

  @media (max-width: 1400px) {
        display: none;
    }



    
`