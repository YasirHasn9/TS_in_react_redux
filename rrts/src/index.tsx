import React from "react"
import ReactDOM from "react-dom"


// to rich your component with the data we are dealing with 
//  we are gonna use an interface to say 'hi component, at the moment,
// we are using this data and the type of it is this and this'

interface AppProps {
    color?:string,
}
interface AppStates {
    count:number
}

class App extends React.Component<AppProps, AppStates>{
    constructor(props:AppProps){
        super(props)
        this.state = {
            count: 0
        }
    }
  
    // because both have returned nothing, we used void
    add = ():void => {
        this.setState({count: this.state.count + 1})
    }
    subtract = ():void => {
        this.setState({count: this.state.count - 1})
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <div>
                <button onClick={this.add} >increment</button>
                <button onClick={this.subtract}>decrement</button>
            </div>
            </>
        )
    }
}


ReactDOM.render(<App  /> , document.getElementById("root"))