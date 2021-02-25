import styled from 'styled-components';
import ImageContainer from './LoginPage/ImageContainer'
import FormContainer from './LoginPage/FormContainer'

function LoginPage(props) {

  return (
    <div className={props.className}>
      <ImageContainer />
      <FormContainer />
    </div>
  );
}

const LoginPageStyled = styled(LoginPage)`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export default LoginPageStyled;
