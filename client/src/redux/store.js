import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {userReducer} from './reducers/user';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    users:userReducer,
    form:formReducer
});

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store