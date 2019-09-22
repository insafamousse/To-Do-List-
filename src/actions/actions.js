import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from './types'
import uuid from 'uuid'

export const addTodo = ({ content }) => dispatch => {
    return(
        dispatch({
            type: ADD_TODO,
            newTodo:{id: uuid(), content}
        })
    )
}

export const deleteTodo = id => dispatch =>{
    return(
        dispatch({
            type: DELETE_TODO,
            id
        })
    )
}

export const toggleTodo = id => dispatch =>{
    return(
        dispatch({
            type: TOGGLE_TODO,
            id
        })
    )
}

export const editTodo = todoToEdit => dispatch => {
    return(
        dispatch({
            type: EDIT_TODO,
            todoToEdit
        })
    )
}