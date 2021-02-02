import { ToDo , FetchTodoActions } from "../actions"
import {ActionTypes} from "../actions/types"

// state:ToDo[] = [] it means if we don't provide an array of todo 
// then use the empty 
export const todoReducer = ( 
    state:ToDo[] = [], action:FetchTodoActions ) => {
        switch(action.type){
            case ActionTypes.fetchTodo:
                return action.payload
            default:
                return state
        }
}

