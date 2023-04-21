import styled from "styled-components";

export const SettingsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => props.theme["gray-400"]};
  
`;

export const SettingsContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 10rem;
  margin-bottom: 2rem;
  overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
  section {
    width: 50%;
    margin-top: 8rem;
  }

  h3 {
    font-size: 2.5rem;
    color: ${(props) => props.theme["gray-800"]};
    font-weight: 900;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-800"]};
    font-weight: 900;
  }

  span {
    color: ${(props) => props.theme["gray-600"]};
    margin-bottom: 2rem;
    display: block;
    width: 80%;
    line-height: 1.6;
  }

  button {
    background-color: ${(props) => props.theme["blue-400"]};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1.5rem;
    &:hover {
      box-shadow: 10px 10px 15px ${(props) => props.theme["gray-600"]};
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;
    margin-top: 1rem;
  }
  li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    label {
      color: ${(props) => props.theme["gray-800"]};
      font-weight: 700;
      display: inline-block;
      white-space: nowrap;
    }

    span {
      margin-bottom: 0rem;
    }
  }
`;

export const PersonalDetails = styled.div`
 
`;


export const ChangePassword = styled.div`
    margin-top: 2rem;
    h4{
        margin-bottom: 1.5rem;
    }
`

export const PlanDetails = styled.div`
     h4 {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-800"]};
    font-weight: 900;
  }
`