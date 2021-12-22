import React from 'react'
import './App.css';

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <input type="checkbox" checked={props.completed} 
            onChange={() => props.handleChange(props.todo.id)} />
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem;
