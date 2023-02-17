import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/src/assets/login/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction:column;
  align-items: center;
  @media (max-width: 1400px) {
    height: auto;
  }
  h2{
    margin-top: 4rem;
    margin-bottom: 4.5rem;
    color: white;
    font-size: 1.5rem;
  }

`

