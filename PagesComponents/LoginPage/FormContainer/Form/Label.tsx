import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { devices } from '../../../../styles/devices'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    invalid: boolean;
    }

const Label: React.FC<InputProps> = (props)=>{
    return(
        <div className={props.className}>{props.children}</div>
    )
}

const LabelStyled = styled(Label)`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 10px;

margin-top: 8px;
margin-left: 11px;

color: var(--dark-color);

@media(${devices.phone}){
    width: 80%;
}

`

export default LabelStyled
