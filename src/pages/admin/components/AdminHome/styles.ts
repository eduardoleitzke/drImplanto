import styled from "styled-components";

export const ProfileHomeContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    button{
        width: 15.875rem;
        height: 3.1rem;
        background-color:${props=>props.theme["blue-400"]};
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
        box-shadow: 10px 10px 15px #3476844D;
        cursor: pointer;
        
        &:hover{
            box-shadow: 15px 15px 20px #3476844D;
        }
    }
`

export const  MyPlanningsBackgroudContainer = styled.img`
        position: absolute;
        filter: drop-shadow(30px 30px 30px rgba(0, 0, 0, 0.065));
        right: 40%;
        top: 20%;
        z-index: -2;
        transform: rotate(350deg);
        overflow: hidden;
`

export const MyPlannings = styled.div`
    display: flex;
    flex-direction: column;
    padding:7.7rem 0 11rem 4rem;
    width: 43rem;
    gap: 2rem;
    ::-webkit-scrollbar{
        display: none;
    }
    a{
        width: 15.875rem;
        height: 3.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:${props=>props.theme["blue-400"]};
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
        box-shadow: 10px 10px 15px #3476844D;
        cursor: pointer;

          
        &:hover{
            box-shadow: 15px 15px 20px #3476844D;
        }
    }

`

export const MyPlanningsHeader = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3{
        font-size: 2rem;
        font-weight: 900;
        color: ${props=>props.theme["gray-800"]};
        }
        
        P{
            color: ${props=>props.theme["gray-600"]};
        }

        `

export const MyPlanningsCardsContainer = styled.div`
        overflow: scroll;
        ::-webkit-scrollbar{
        display: none;
    }
        max-height: 15rem;

      h4{
        font-size: 1.5rem;
        font-weight: 900;
        color: ${props=>props.theme["gray-800"]};
        }
`

export const MyPlanningsCard = styled.div`
    border-radius: 5px;
    padding-bottom: 1rem;
    ::-webkit-scrollbar{
        display: none;
    }
    table{
        width: 100%;
        padding: 1rem 0 0rem 1.5rem;
        thead{
            color: ${props=>props.theme["gray-800"]};
            font-weight: bold;
            tr{
                /* display: flex; */
                justify-content: space-between;
                th{
                    text-align: start;
                }
            }
        }

        tbody{
            color: ${props=>props.theme["gray-800"]};
            font-weight: 400;
            
            tr{
                width: 100;
                position: relative;
                td{                
                     padding-top: 1.5rem;
                     svg{
                        position: absolute;
                        right: 1rem;
                        color:${props=>props.theme["blue-400"]};
                     }
                }
            }
        }
    }
` 