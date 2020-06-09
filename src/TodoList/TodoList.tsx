import React from 'react'
import ListItem, { TodoItemProps } from '../ListItem/ListItem'
// import '../TodoList/TodoList.css'

import s from './TodoList.module.css'

interface TodoListProps {
    todos: TodoItemProps[]
    openModalWindow(id: any): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, openModalWindow }) => {

    const elements = todos.map((item) => {
        return (
            // <li key={item.id} className="list-group-item">
            <li key={item.id} className="list-group-item">  
                <ListItem todo={item} openModalWindow={openModalWindow} />
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>

    )
}

export default TodoList
