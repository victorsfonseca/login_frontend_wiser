import styled from 'styled-components'
import { devices } from '../../../styles/devices'

const forgotUserOrPasswordLink = 'http://github.com/victorsfonseca'

function ForgotUserPassLabel(props){
    return(
        <div className={props.className}>Esqueceu seu login ou senha?<br />Click <a href={forgotUserOrPasswordLink}>aqui</a></div>
    )
}

const ForgotUserPassLabelStyled = styled(ForgotUserPassLabel)`
    margin-top: 48px;
    color: var(--light-color);

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    text-align: center;
    
    a{
        color: #9D25B0;
    }

    @media(${devices.phone}){
        color: white;
        a{color: white;}
    }

    
`

export default ForgotUserPassLabelStyled