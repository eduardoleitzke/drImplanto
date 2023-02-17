import styled from "styled-components";

interface ScreenHeightProps{
  screenHeight: 'auto' | '100vh'
}

export const RegisterContainer = styled.div<ScreenHeightProps>`
    width: 100vw;
    height: 100vh;
    background-image: url('/src/assets/login/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction:column;
    align-items: center;
    position: absolute;
    padding-bottom: 2rem;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    @media (max-width: 1400px) {
        height: ${props=>props.screenHeight};
    }

    h2{
    margin-top: 4rem;
    margin-bottom: 4.5rem;
    color: white;
    font-size: 1.5rem;
  }

`