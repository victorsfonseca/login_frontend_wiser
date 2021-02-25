// Action Types

export const Types = {
    LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
    LOGGED_IN: 'auth/LOGGED_IN',
    LOGIN_FAIL: 'auth/LOGIN_FAIL',
    LOGGED_OUT: 'auth/LOGGED_OUT',
  };
  
  // Reducer
  
  const initialState = {
    request:{
      user: null,
      pass: null
    },
    isLogged: false,
    error_message: '',
    token: null,
    user: {
      username: '',
      name: ''
    },
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case Types.LOGIN_REQUEST:
        return {...state, request: action.request}
      case Types.LOGGED_IN:
        return {...state, isLogged: true, error_message: '', token: action.token, user: action.user};
      case Types.LOGIN_FAIL:
        return {...state, error_message: action.message}
      case Types.LOGGED_OUT:
        return {...state, isLogged: false, token: null, user: { username: '', name: ''}};
      default:
        return state;
    }
  }
  
  // Action Creators

  export function loginRequest(user,pass){
    return {type: Types.LOGIN_REQUEST, request: {user:user, pass: pass}}
  }
  
  export function logout() {

    return {
      type: Types.LOGGED_OUT,
    }
  }
