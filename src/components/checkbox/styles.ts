import styled from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(Checkbox.Root)`
    all: unset;
    background: ${props=>props.theme["gray-100"]};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 4;
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    cursor: pointer;
    &:hover{
        background: ${props=>props.theme["gray-300"]};
  }

`

export const CheckBoxIndicator = styled(Checkbox.Indicator)`
    display: flex;
    justify-content: center;
    align-items: center;

 
`