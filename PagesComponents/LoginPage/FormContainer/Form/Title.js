import styled from 'styled-components'
import { devices } from '../../../../styles/devices'

function Title(props){
    return(
        <h1 className={props.className}>Olá, seja<br/>bem-vindo!</h1>
    )
}

const TitleStyled = styled(Title)`
    color: var(--dark-color);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;

    margin: 0;
    
    margin-top: 24px;
    margin-bottom: 16px;
    
    @media(${devices.phone}){
        text-align: center;
        
    }
`

export default TitleStyled