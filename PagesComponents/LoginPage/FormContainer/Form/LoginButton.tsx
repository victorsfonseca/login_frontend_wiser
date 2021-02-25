import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { devices } from '../../../../styles/devices'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    onClick: (event: React.MouseEvent) => void;
    children: React.FC;
    }

const LoginButton: React.FC<InputProps> = (props) =>{
    return(
        <button className={props.className} onClick={props.onClick}>{props.children}</button>
    )
}

const LoginButtonStyled = styled(LoginButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;

    text-align: center;
    position: relative;
    bottom: -24px;
    color: white;

    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    border: none;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    cursor: pointer;

    :focus{
        outline: none;
    }

    @media(${devices.phone}){
        width: 168px;
        box-shadow: none;
    }
`
export default LoginButtonStyled