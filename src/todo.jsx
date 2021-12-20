import React from 'react'
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todosData';

class Todo extends React.Component {
    constructor() {
        super()
        this.state={
            todos: todosData
        }
    }
    render() {
    const TodoComponent = this.state.todos.map(todo => 
    <TodoItem key = {todo.id} text={todo.text} completed={todo.completed}/>)
    return (
        <div className='todo_list'>
            {TodoComponent}
        </div>
    )
    }
}
export default Todo;
