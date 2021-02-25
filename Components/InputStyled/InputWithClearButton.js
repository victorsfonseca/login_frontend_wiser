import styled from 'styled-components'
import Input from './InputStyled.tsx'
import ClearButton from './ClearButton.tsx'

const InputStyled = styled(Input)`
    position: absolute;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    width: 95%;

    padding: 0;
    padding-left: 5%;
`

function InputWithClearButton(props){
    return(
        <div className={props.className} >
            <InputStyled type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} invalid={props.invalid}/>
            <ClearButton onClick={props.onClearButtonClick} hidden={props.value === ''? true: false} invalid={props.invalid} />
        </div>
    )
}

const InputWithClearButtonStyled = styled(InputWithClearButton)`
    position: relative;
    width: 100%;
    height: 48px;

    margin: 8px 0 8px 0;
`

export default InputWithClearButtonStyled