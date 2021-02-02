import {combineReducers} from "redux"
import {todoReducer} from "./todo"
import {ToDo} from "../actions"

export interface StoreState {
    todo:ToDo[]
}
export const reducers = combineReducers({
    todo:todoReducer,
})
