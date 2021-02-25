import { call, take, select, put} from 'redux-saga/effects'
import auth from '../../api/auth'
import { Types } from '../ducks/auth'

export function* watchAuth(){
    while(true){
        try{

            yield take(Types.LOGIN_REQUEST)

            const user = yield select(state => state.auth.request.user)
            const pass = yield select(state => state.auth.request.pass)

            const data = yield call(auth.login,user, pass)

            yield put({type: Types.LOGGED_IN, token: data.token, user: data.user })
            
        }
        catch(error){
            yield put({type: Types.LOGIN_FAIL, message: error.message })
        }
    }
}

export function* alertSuccess() {
    while(true){
        yield take(Types.LOGGED_IN)
        const token = yield select(state => state.auth.token)
        const user = yield select(state => state.auth.user.username)
        const name = yield select(state => state.auth.user.name)
        // eslint-disable-next-line
        const message = 'Usuário ' + user + ' logado. \nToken: ' + token + '\n' + 'Nome: ' + name
        alert(message)
    }
}

export function* alertFail() {
    while(true){
        yield take(Types.LOGIN_FAIL)
        const message = yield select(state => state.auth.error_message)
        alert(message)
    }
}