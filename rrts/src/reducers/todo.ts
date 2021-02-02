import { ToDo , FetchTodoActions , ActionTypes } from "../actions"


// state:ToDo[] = [] it means if we don't provide an array of todo 
// then use the empty 
export const todoReducer = (state:ToDo[] = [], action:FetchTodoActions ):ToDo[] | [] => {
        switch(action.type){
            case ActionTypes.fetchTodo:
                return action.payload
            default:
                return state
        }
}

