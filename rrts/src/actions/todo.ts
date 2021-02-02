import axios from "axios"

// if we dont use the Dispatch function from redux
//  as an annotation to the dispatch in the redux-thunk
// its going to complain 
import {Dispatch} from "redux"

// actions
import {ActionTypes} from "./types"

export interface ToDo {
    id:number,
    title:string,
    complete:boolean
}


// this is optional but good to use 
// we can make an interface to make sure we have the correct actions
export interface FetchTodoActions {
    // this will make sure we are passing the correct actions and props
    type:ActionTypes.fetchTodo;
    payload:ToDo[]
}


export interface DeleteToDoAction {
    type:ActionTypes.deleteToDo,
    payload:number
}
const url = "http://jsonplaceholder.typicode.com/todos"
export const fetchTodo = () => {
    // here , we are gonna make a network request
    //  which means it is an async. we have to make use of a redux thunk
    // since, we are using the redux-thunk , we need a dispatch
    
    // the dispatch function is coming from redux, it allows
    // for us to dispatch actions as we pleased
    
    // dispatch here is a function , for sure we dont have any idea 
    // whats arguments it takes . To left this burden, we import the Dispatch
    // from redux itself and use it a type to dispatch in thunk
    return async (dispatch:Dispatch) => {
        const response = await axios.get<ToDo[]>(url)
        console.log("from the fetch",response)
        dispatch<FetchTodoActions>({
        // because of the FetchTodoActions , we cant just randomly props and actions
            type:ActionTypes.fetchTodo,
            payload:response.data
        })
    
    }
}

export const deleteToDo = (id:number) => {
    return (dispatch:Dispatch) => {
        dispatch<DeleteToDoAction>({
            type:ActionTypes.deleteToDo,
            payload:id
        })
    }
}