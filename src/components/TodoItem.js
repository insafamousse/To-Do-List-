import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../actions/actions';

export class TodoItem extends Component {
    state = { disabled: true, content: this.props.todo.content, id: this.props.todo.id }

    editTodo = () => {
        if(!this.state.disabled){
            this.props.editTodo({...this.state, content: this.state.content})
            this.setState({ disabled: !this.state.disabled });
        }else{
            this.setState({ disabled: !this.state.disabled });
        }
    }
    handleChange = e => {
        this.setState({ content: e.target.value });
    }
    render() {
        const { todo, deleteTodo, toggleTodo } = this.props
        return (
            <div className="todo-row">
                <div className="todo-item">
                    <input type="checkbox" onClick={() => toggleTodo(todo.id)}/>
                    <input onChange={this.handleChange} disabled={this.state.disabled} style={{
                        border: this.state.disabled ? 'none' : '1px solid black',
                        textDecoration: todo.completed ? 'line-through' : 'none'
                ,color: todo.completed ? 'grey' : 'white'}} id="todo-text" type="text" 
                value={this.state.content}/>
                </div>
                <div className="buttons">
                    <button onClick={this.editTodo} className="edit"><i className="far fa-edit"></i></button>
                    <button onClick={() => deleteTodo(todo.id)} className="delete"><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        )
    }
}

export default connect(null, {deleteTodo, toggleTodo, editTodo})(TodoItem)
