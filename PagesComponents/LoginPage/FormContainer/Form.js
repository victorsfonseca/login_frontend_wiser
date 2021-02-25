import { useState } from 'react'
import styled from 'styled-components'
import { devices } from '../../../styles/devices'
import Title from './Form/Title'
import SubTitle from './Form/SubTitle'
import Label from './Form/Label.tsx'
import Username from './Form/Username'
import Password from './Form/Password'
import LoginButton from './Form/LoginButton.tsx'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginRequest } from '../../../store/ducks/auth'

function Form(props){
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const [invalid, setInvalid] = useState(false)

    function validateEmail(email){
        setInvalid((!emailIsValid(email) && email !== '') ? true : false)
    }

    function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

    function userChanged(event){
        const newValue = event.target.value
        setUser(newValue)
        validateEmail(newValue)
    }

    function resetUser(){
        const newUser = ''
        setUser(newUser)
        validateEmail(newUser)
    }

    function passChanged(event){
        const newValue = event.target.value
        setPass(newValue)
    }

    function resetPass(){
        const newPass = ''
        setPass(newPass)
    }

    function login(event){
        // props.dispatch(authLogin(user,pass))
        props.loginRequest(user,pass)
    }

    return(
        <div className={props.className} > 
            <Title />
            <SubTitle />
            <Label >E-MAIL</Label>
            <Username value={user} onChange={userChanged} onClearButtonClick={resetUser} invalid={invalid}/>
            <Label >SENHA</Label>
            <Password value={pass} onChange={passChanged} onClearButtonClick={resetPass}/>
            <LoginButton onClick={login}>ENTRAR</LoginButton>
        </div>

    );
}

const mapStateToProps = store => ({
    isLogged: store.auth.isLogged,
    token: store.auth.token,
    user: store.auth.user
  });

const mapDispatchToProps = dispatch => bindActionCreators({ loginRequest }, dispatch)

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form)

const FormStyled = styled(ConnectedForm)`
display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-start ;

width: 256px;

@media(${devices.phone}){
    width: 85%;
    background: var(--background-color);
    border-radius: 8px;
    margin-top: 139px;

    justify-content: center;
    align-items: center;
}
`

export default FormStyled