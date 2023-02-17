import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, html{
        font-family: 'Montserrat', sans-serif;
        height: 100%;
        -webkit-font-smoothing: antialiased;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        border: none;
        font-family: 'MontSerrat';
    }
    `