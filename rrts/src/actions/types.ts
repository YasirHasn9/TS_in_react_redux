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