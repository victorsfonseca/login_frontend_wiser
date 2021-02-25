import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent) => void;
    invalid: boolean;
    }

const InputStyled: React.FC<InputProps> = (props) => {
    return(
        <input className={props.className} type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
    )
}

const Input = styled(InputStyled)`

    height: 48px;

    background-color: transparent;
    color: var(--light-color);
    border: 1px solid ${props => { return props.invalid? 'var(--invalid-color)': 'var(--light-color)'}};
    border-radius: 8px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;

    ::placeholder{
        color: var(--light-color);
    }

    :focus{
        outline: none;
    }
`

export default Input