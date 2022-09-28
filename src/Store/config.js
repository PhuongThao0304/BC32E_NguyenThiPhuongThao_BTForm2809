import {combineReducers, createStore} from 'redux' 
import { BTform } from './Reducers/BTform'

const rootReducers = combineReducers({

    BTform


})


export const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())