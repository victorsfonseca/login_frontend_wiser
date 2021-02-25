import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    type: string;
    hidden: boolean;
    onClick: (event: React.MouseEvent) => void;
    invalid: boolean;
    }

const ClearButton: React.FC <InputProps> = (props) =>{
    return(
        <button className={props.className} type='reset' hidden={props.hidden} onClick={props.onClick} >x</button>
    )
}

const ClearButtonStyled = styled(ClearButton)`
    position: absolute;
    top: 19px;
    right: 10px;

    
    background: transparent;
    border: none;
    color: ${props => { return props.invalid? 'var(--invalid-color)': 'var(--light-color)'}};

    padding: 0;
    width: 10px;
    height: 10px;

    cursor: pointer;
    display: ${props => {return props.hidden? 'none':'flex' }};
    justify-content: center;
    align-items: center;

    text-align: center;

    :focus{
        outline: none;
        border: none;
    }
`

export default ClearButtonStyled