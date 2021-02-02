import React from "react"
import {connect} from "react-redux"
import {ToDo , fetchTodo} from "../actions/index"
import {StoreState} from "../reducers"


export interface AppProps {
    todo:ToDo[];
    fetchTodo():any
}
export class _App extends React.Component<AppProps>{
    onClickButton = ():void => {
        this.props.fetchTodo()
    }

    renderList():JSX.Element[]{
        return this.props.todo.map((item:ToDo) => {
            return (
                <div>{item.title}</div>
            )
        })
    }

    render():JSX.Element{
        console.log("props",this.props.todo)
        return (
            <div>
                <button onClick={this.onClickButton}>Fetch</button>
                {this.props.todo.length === 0 ? <p>Your List Is Empty</p>: this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state:StoreState): {todo:ToDo[]} => {
    return {
        todo:state.todo
    }
}

export const App =  connect(mapStateToProps,{fetchTodo})(_App )