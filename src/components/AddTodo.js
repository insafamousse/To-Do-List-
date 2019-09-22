import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

export class AddTodo extends Component {  
    handleChange = event => {
        this.setState({ content: event.target.value });
    }
    addNewTodo = () => { 
        this.props.addTodo(this.state)
    }
    render() {
        return (
            <div className="add-todo">
                <input onChange={this.handleChange}
                    type="text"
                    placeholder="Add your todo"
                    />
                <input onClick={this.addNewTodo} type="button" value="+"/>
            </div>
        )
    }
}

export default connect(null, {addTodo})(AddTodo)
