import styled from 'styled-components'
import InputWithClearButton from '../../../../Components/InputStyled/InputWithClearButton'
import { devices } from '../../../../styles/devices'

function Password(props){
    return(
        <InputWithClearButton className={ props.className } type='password' placeholder='*******' value={props.value} onChange={props.onChange} onClearButtonClick={props.onClearButtonClick}/>
    )
}

const PasswordStyled = styled(Password)`

width: 100%;

@media(${devices.phone}){
    width: 80%;
}

`

export default PasswordStyled