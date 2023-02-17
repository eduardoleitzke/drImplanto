import styled from "styled-components";

export const HomeIntroContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 7.25rem;
    padding: 4rem 10rem;

    @media (max-width: 1400px) {
        margin-top: 0;
       
        }  

    img{
        width: 40%;
    }
`

export const HomeIntroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 38.81rem;
    width: 28.68rem;
    position: relative;

    @media (max-width: 1400px) {
        height: 25.81rem;
        }  
`

export const HomeIntroContentWriting = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

     h2{
        font-size: 3rem;
        font-weight: 900;
        color: ${props => props.theme["gray-800"]};
        width: 150%;

        @media (max-width: 1400px) {
              font-size: 2rem;
              width: 100%;
        }   

        span{
            color: ${props => props.theme["blue-400"]};
            text-decoration: underline;
        }
    }

    p{
        font-size: 1.5rem;
        color: ${props => props.theme["gray-600"]};
        line-height: 2.2rem;
        width: 120%;

        @media (max-width: 1400px) {
              font-size: 1rem;
              line-height: 1.5rem;
              width: 90%;
        } 
    }
`

export const HomeIntroContentButtons = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    gap: 0.5rem;
    a{
            font-weight: bold;
            text-decoration: none;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 5px;
            height: 4rem;
            padding: 0 2.2rem;
            width: 16rem;

            @media (max-width: 1400px) {
                    font-size: 1rem;
                    padding: 0 1.5rem;
                    height: 3rem;
                    width: 12rem;
                }
          
        }
`

export const RegisterButton = styled.a`
    color: ${props => props.theme["white"]};
    background: ${props => props.theme["blue-400"]};
    box-shadow: 10px 10px 15px #3476844D;
   
    gap: 0.5rem;
    &:hover{
        box-shadow: 10px 10px 15px ${props => props.theme['gray-600']};
    }
`

export const PlansButton = styled.a`
    color: ${props => props.theme["blue-400"]};

`