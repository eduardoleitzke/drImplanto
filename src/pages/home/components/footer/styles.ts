import styled from "styled-components";

export const HomeFooterContainer = styled.footer`
    width: 100%;
    height: 28.93rem;
    background-color: ${props => props.theme["blue-400"]};
    color: ${props => props.theme["white"]};
    padding:  4.31rem 10rem 0 10rem ;
    display: grid;
    grid-template-areas: "a1 a2 a2 a3 a3"
                         "a1 a2 a2 a3 a3"
                         "a1 a2 a2 a3 a3"  
                         "a1 a2 a2 a3 a3"
                         "a1 a2 a2 a3 a3"
                         "a1 a2 a2 a3 a3" 
                         "a4 a4 a4 a4 a4";

    @media (max-width: 1400px) {
        height: auto;
    }
    span{
        font-size: 1.5rem;
        font-weight: 900;
        @media (max-width: 1400px) {
            font-size: 1rem;
        }
    }
    a{
        font-size: 0.875rem;
    }

`

export const FooterInfo = styled.div`
    grid-area: a1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p{
        width: 33%;
        font-size: 0.875rem;
        line-height: 20px;
        @media (max-width: 1400px) {
            width: 80%;
        }
    }

    div{
        display: flex;
        gap: 1rem;
    }
`

export const FooterMenu = styled.nav`
    grid-area: a2; 
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Contatcts = styled.div`
    grid-area: a3; 
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

   p{
    font-size: 0.875rem;
   }
`

export const Baseboard = styled.div`
    border-top: 2px solid  ${props => props.theme["gray-400"]};
    grid-area: a4; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    font-size: 0.875rem;
    @media (max-width: 1400px) {
            margin-top: 2rem;
        }
    
    nav{
        display: flex;
        gap: 1rem;
    }
`

