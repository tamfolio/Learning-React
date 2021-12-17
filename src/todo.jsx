import React from 'react'
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

function Todo() {
    const TodoComponent = todosData.map(todo => 
    <TodoItem key = {todo.id} text={todo.text} completed={todo.completed}/>)
    return (
        <div className='todo_list'>
            {TodoComponent}
        </div>
    )
}

export default Todo;
