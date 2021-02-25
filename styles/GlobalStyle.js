// The other components styles are in the same file .js of component

import { createGlobalStyle } from 'styled-components'
const Font ='Assets/fonts/Montserrat-Regular.ttf'

const GlobalStyle = createGlobalStyle`

  @font-face {
      font-family: Montserrat;
      src: url(${Font})
    }

  :root{
    
    --background-color: #FAF5FF;

    --dark-color:  #383E71;
    --light-color: #989FDB;

    --invalid-color: #FF377F;
  }

  body{
    margin: 0;
    background-color: var(--background-color);
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
  }
`

export default GlobalStyle