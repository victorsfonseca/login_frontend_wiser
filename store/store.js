import { createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import authReducer from './ducks/auth'
import { watchAuth, alertSuccess, alertFail} from './sagas/authSagas'

export const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    auth: authReducer
})

export default createStore(reducers, applyMiddleware(sagaMiddleware))



sagaMiddleware.run(watchAuth)
sagaMiddleware.run(alertSuccess)
sagaMiddleware.run(alertFail)