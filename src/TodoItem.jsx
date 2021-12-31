import React from 'react'
import './App.css';

function TodoItem(props) {
    const completedStyle = {
        fontStyle: 'italic',
        color: "#cdcdcd",
        textDecoration: 'line-through'
    }
    return (
        <div className='todo-item'>
            <input type="checkbox" checked={props.completed} 
            onChange={() => props.handleChange(props.todo.id)} />
            <p style={props.completed ? completedStyle : null}>{props.text}</p>
        </div>
    )
}

export default TodoItem;
