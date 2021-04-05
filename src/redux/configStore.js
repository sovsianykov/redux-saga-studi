import { combineReducers , createStore , applyMiddleware} from "redux";
import { counterReducer } from './ducks/counterReducer';
import { userReducer } from './ducks/user';
import createSagaMiddleware from 'redux-saga'


const reducer = combineReducers({
  counter :  counterReducer,
  user : userReducer
})
const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware] ;
const store = createStore(reducer, {}, applyMiddleware( ...middleware))

export default store
