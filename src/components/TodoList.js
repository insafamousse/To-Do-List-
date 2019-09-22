import React from 'react'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => <TodoItem todo={todo} key={index}/>)}
        </div>
    )
	}

const mapStateToProps = state => {
	return{
		todos: state.TodoReducer
	}
}
export default connect(mapStateToProps)(TodoList)
