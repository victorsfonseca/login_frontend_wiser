import styled from 'styled-components'
import { devices } from '../../styles/devices'
import Form from './FormContainer/Form'
import ForgotUserPassLabel from './FormContainer/ForgotUserPassLabel'

function FormContainer(props){

    return(
        <div className={props.className}>
            <Form />
            <ForgotUserPassLabel />
            
        </div>
    );
}

const FormContainerStyled = styled(FormContainer)`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(${devices.phone}){
        justify-content: start;
    }


`
export default FormContainerStyled