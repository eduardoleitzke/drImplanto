import styled from "styled-components";

export const LoginContainer = styled.div`
display: relative;
  width: 100vw;
  display: flex;
  flex-direction:column;
  align-items: center;
  @media (max-width: 1400px) {
    height: 100%;
    h2
    {
      display: none;
    }
    
  
  }

  h2{
    margin-top: 4rem;
    margin-bottom: 4.5rem;
    color: white;
    font-size: 1.5rem;
  }

  img{
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100%;
  
  }

`

