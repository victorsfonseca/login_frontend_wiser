import styled from 'styled-components'
import { devices } from '../../../../styles/devices'
import InputWithClearButton from '../../../../Components/InputStyled/InputWithClearButton'
import InvalidLabel from './InvalidLabel.tsx'

function Username(props){
    
    return(
        <div className={props.className} >
            <InputWithClearButton type='email' onChange={props.onChange} value={props.value} placeholder='user.name@mail.com' onClearButtonClick={props.onClearButtonClick} invalid={props.invalid} />
            <InvalidLabel invalid={props.invalid} />
        </div>
    
    )
}

const UsernameStyled = styled(Username)`
    width: 100%;

    @media(${devices.phone}){
        width: 80%;
    }
`

export default UsernameStyled