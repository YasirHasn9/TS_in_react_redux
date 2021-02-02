import React from "react"
import {connect} from "react-redux"
import {ToDo , fetchTodo ,removeTodo} from "../actions"
import {StoreState} from "../reducers"


export interface AppProps {
    todo:ToDo[];
    fetchTodo:Function;
    removeTodo: Function
}
export class _App extends React.Component<AppProps>{
    onButtonClick = ():void => {
        this.props.fetchTodo()
    }

    onTodoClick = (id:number):void => {
        this.props.removeTodo(id)
    }

    renderList():JSX.Element[]{
        return this.props.todo.map((item:ToDo) => {
            return (
                <div onClick={() => 
                    this.onTodoClick(item.id)} 
                    key={item.id}>
                        {item.title}
                </div>
            )
        })
    }

    render():JSX.Element{
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
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

export const App =  connect(mapStateToProps,{fetchTodo, removeTodo})(_App )