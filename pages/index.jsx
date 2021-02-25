import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import LoginPage from '../PagesComponents/LoginPage';
import GlobalStyle from '../styles/GlobalStyle'


export default function index() {
  return(
    <Provider store={store}>
      <GlobalStyle />
      <LoginPage />
    </Provider>
  ) 
}
