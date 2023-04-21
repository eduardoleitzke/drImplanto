import styled from "styled-components";

export const MenuContainer = styled.nav`
    width: 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-left: 2px solid rgb(218, 211, 211);
    border-right: 3px solid rgb(218, 211, 211);
    p{
        font-weight: 900;
        color: ${props => props.theme["gray-800"]};
        font-size: 1.5rem;
    }
    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        li{
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                border-radius: 5px;
                background-color:${props => props.theme["blue-400"]};
                img{
                    filter: invert(0) sepia(0) saturate(1) hue-rotate(0deg) brightness(1.2);
                }
            }
        }
        
    }
    svg{
        color: #E9E9E9;
       
      }

    a{
        padding: 0.4rem 1.5rem ;
        &:hover{
            padding: 0.4rem 1.5rem ;
            border-radius: 5px;
            background-color:${props => props.theme["blue-400"]};
                svg{
                    color: #fff;
                }
        }
    }
`

export const LoggoutIcon = styled.a`
    width: 85%;
    height: 3rem;
    &:hover{
            padding: 0.4rem 1.5rem ;
            border-radius: 5px;
            background-color:${props => props.theme["blue-400"]};
                svg{
                    color: #fff;
                }
        }
`

export const LoggoutButton = styled.button`
    width: 85%;
    height: 3rem;
    background-color: transparent;
    cursor: pointer;
    &:hover{
            padding: 0.4rem 1.5rem ;
            border-radius: 5px;
            background-color:${props => props.theme["blue-400"]};
                svg{
                    color: #fff;
                }
        }`
