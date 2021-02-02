import React from "react"
import {connect} from "react-redux"
import {ToDo , fetchTodo ,removeTodo} from "../actions"
import {StoreState} from "../reducers"


export interface AppProps {
    todo:ToDo[];
    fetchTodo:Function;
    removeTodo: Function
}

interface AppState {
    fetching: boolean;
}
export class _App extends React.Component<AppProps, AppState>{
    constructor(props:AppProps){
        super(props)
        this.state = {
            fetching:false
        }
    }
    componentDidUpdate(prevProps:AppProps ):void {
        if(!prevProps.todo.length && this.props.todo.length){
            this.setState({fetching:false})
        }
    }
    onButtonClick = ():void => {
        this.props.fetchTodo()
        this.setState({fetching:true})
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
                {
                    this.state.fetching ? "LOADING" : null
                }
                {this.renderList()}
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