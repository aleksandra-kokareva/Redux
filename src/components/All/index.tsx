import React from 'react'
import './index.css'
import TodoList from "../../TodoList/TodoList";
import {TodoItemProps} from "../../ListItem/ListItem";

interface TodoListProps {
  todos: TodoItemProps[],
  openModalWindow(id: string): void
}

const Index: React.FC <TodoListProps> = ({todos, openModalWindow}) => {

    return (
      <>
          <TodoList
            todos = {todos} 
            openModalWindow={openModalWindow} />
      </>
    )
}

export default Index




