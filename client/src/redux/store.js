import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {userReducer} from './reducers/user';


const reducers = combineReducers({
    users:userReducer
});

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store