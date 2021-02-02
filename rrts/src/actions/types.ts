/*
Now , in the file [todo](https://github.com/YasirHasn9/TS_in_react_redux/blob/main/rrts/src/reducers/todo.ts)
we are gonna have a lot of actions which is gonna forces to use a lot of | to include them all.
This is tedious and not worth it and also may causes a potential problems 
to fix it, we are gonna export all type interfaces here from the todo file 
*/

import {FetchTodoActions,DeleteToDoAction} from "./todo"




// enum is ts feature which is not in type-level js extension
// it allows for developer to define a set of named constants
// wether they are number or strings
// in numbers , enums have an auto-incrementing behavior
// in string, it does not.
export enum ActionTypes {
    // since we did initialize the fetchTodo
    // ts will assume its value 0 like fetchTodo = 0
    // actually, in redux we only need a unique value that based 
    // on it so we can dispatch actions
    fetchTodo,
    deleteToDo
}

export type Action = FetchTodoActions | DeleteToDoAction