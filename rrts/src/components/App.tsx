import React from "react"
import {connect} from "react-redux"
import {ToDo , fetchTodo} from "../actions/index"
import {StoreState} from "../reducers"


export interface AppProps {
    todo:ToDo[];
    fetchTodo():any
}
export class _App extends React.Component<AppProps>{

    componentDidMount(){
        this.props.fetchTodo()
    }

    render():JSX.Element{
        console.log("props",this.props.todo)
        return (
            <div>HEllo world</div>
        )
    }
}

const mapStateToProps = (state:StoreState): {todo:ToDo[]} => {
    return {
        todo:state.todo
    }
}

export const App =  connect(mapStateToProps,{fetchTodo})(_App )