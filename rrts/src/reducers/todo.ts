import { ToDo,Action,ActionTypes } from "../actions"


// state:ToDo[] = [] it means if we don't provide an array of todo 
// then use the empty 
export const todoReducer = (
    state:ToDo[] = [], 
    // now what if we have more than 10 actions 04 100s actions 
    //  how long is this gonna be our action, not elegant.
    // to make more readable and pleasant, we need to fix the actions itself.
    action:Action
    ):ToDo[] | [] => {
        switch(action.type){
            case ActionTypes.fetchTodo:
                return action.payload
            default:
                return state
        }
}