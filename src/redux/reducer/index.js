// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from "redux";

import count from './count_reducer'
import person from './person_reducer'

export default combineReducers({
    count,
    person
})