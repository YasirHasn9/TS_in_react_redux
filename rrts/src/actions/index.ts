import axios from "axios"

// if we dont use the Dispatch function from redux
//  as an annotation to the dispatch in the redux-thunk
// its going to complain 
import {Dispatch} from "redux"

// actions
import {ActionTypes} from "./types"

interface ToDo {
    id:number,
    title:string,
    complete:boolean
}



const url = "http://jsonplaceholder.typicode.com/todos"
export const fecthTodes = () => {
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

        dispatch({
            type:ActionTypes.fetchTodo,
            payload:response.data
        })
    
    }
}