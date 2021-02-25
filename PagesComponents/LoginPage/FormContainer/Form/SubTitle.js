import styled from 'styled-components'
import { devices } from '../../../../styles/devices'

function SubTitle(props){
    return(
        <h3 className={props.className}>Para acessar a plataforma, faça seu login.</h3>
    )
}

const SubTitleStyled = styled(SubTitle)`
    position: relative;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: var(--light-color);
    margin: 0;
    max-width: 220px;

    margin-bottom: 35px;

    @media(${devices.phone}){
        text-align: center;
        width: 90%;
        font-size: 12px;
        
        max-width: 100%;
        margin-bottom: 20px;
    }
`

export default SubTitleStyled