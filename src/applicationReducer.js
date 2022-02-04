import { combineReducers } from 'redux'
import { counterReducer } from './counterReducer'
import { countryReducer } from './countryReducer'

export const appReducer = combineReducers({
    counterReducer: counterReducer,
    countryReducer: countryReducer
})