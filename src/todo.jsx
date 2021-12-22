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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render() {
    const TodoComponent = this.state.todos.map(todo => 
    <TodoItem key = {todo.id} text={todo.text} completed={todo.completed}
    handleChange={this.handleChange} todo={todo}/>)
    return (
        <div className='todo_list'>
            {TodoComponent}
        </div>
    )
    }
}
export default Todo;
