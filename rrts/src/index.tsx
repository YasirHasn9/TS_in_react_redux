import React from "react"
import ReactDOM from "react-dom"
import {App} from "./components/App"

// to rich your component with the data we are dealing with 
//  we are gonna use an interface to say 'hi component, at the moment,
// we are using this data and the type of it is this and this'


// redux
import {createStore , applyMiddleware} from "redux"
// some packages have already @types/definition installed with them 
// but react-redux don't . So , we need to install @types
import {Provider} from "react-redux"
import thunk from "redux-thunk"


// store
import {reducers} from "./reducers/index"
const store = createStore(reducers , applyMiddleware(thunk))
 

ReactDOM.render(
<Provider store={store}>
    <App  /> 
</Provider>,
 document.getElementById("root"))
// import React from "react"
// import ReactDOM from "react-dom"
// import {App} from "./components/App"
// import {createStore, applyMiddleware} from "redux"
// import {Provider} from "react-redux"
// import thunk from "redux-thunk"
// import {reducers} from "./reducers/index"

// let store = createStore(reducers, applyMiddleware(thunk))

// ReactDOM.render(<Provider store={store}>
//     <App />
// </Provider>,
// document.getElementById("root"))
