import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    invalid: boolean;
    }

const InvalidLabel: React.FC<InputProps> = (props) =>{
    return(
        <div className={props.className}>Digite um email válido.</div>
    )
}

const InvalidLabelStyled = styled(InvalidLabel)`
    display: ${props =>{return props.invalid? 'flex': 'none'}};
    color: var(--invalid-color);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    margin-left: 15px;
    margin-bottom: 8px;
`

export default InvalidLabelStyled