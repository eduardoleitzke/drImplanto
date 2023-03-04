import styled from "styled-components";


export const RecoveryPasswordContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/src/assets/login/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    @media (max-width: 1400px) {
        height: 100vh;
    }

    h2{
    margin-top: 4rem;
    margin-bottom: 4.5rem;
    color: white;
    font-size: 1.5rem;
  }

`


export const RecoveryPasswordCardContainer = styled.div`
    width: 38.5rem;
    background-color: white;
    border-radius: 5px;
    padding: 4rem 0rem 4rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    bottom: calc(100vh - 38.5rem - 5rem);

    @media (max-width: 1400px) {
        bottom: calc(120vh - 38.5rem - 5rem);
    }
    header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        h3{
            font-size: 3rem;
            color: #3E3E3E;
            text-align: center;
            font-weight: 900;
         }

        p{
            font-size: 1rem;    
            line-height: 1.5rem;
            color: #B4B4B4;
            width: 60%; 
            text-align: center;
        }
    }

    
    form{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
       
    input{
            width: 80%;
            height: 3.4rem;
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            border-radius: 5px;
            border: none;
            background-color: ${props => props.theme["gray-100"]};
            color: ${props => props.theme["gray-800"]};
            outline: none;
            text-align: center;
            }
                                     
`
export const RecoveryPasswordCardButton = styled.button`
       width: 80%;
        display: flex;
        align-items: center;
       justify-content: center;
        margin-top: 2rem;
        font-weight: bold;
        font-size: 1.5rem;
        background-color: ${props => props.theme["blue-400"]};
        color: white;
        height: 4rem;
        border-radius: 5px;
        box-shadow: 0px 20px 40px rgb(14 84 100 / 30%);
        cursor: pointer;
            
`