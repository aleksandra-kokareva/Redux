import React from 'react'
import '../ListItem/ListItem.css'
import { Dispatch } from "../store"
import { doneItem, importantItem } from "../store/action/itemActions"
import { useDispatch } from "react-redux"

export interface ParentProps {
  todo: TodoItemProps,
  openModalWindow(id: string): void
}

export interface TodoItemProps {
  id: string
  label: string
  important: boolean
  done: boolean
}

const TodoList: React.FC<ParentProps> = ({ todo, openModalWindow }) => {

  const dispatch = useDispatch<Dispatch>()

  let classNames = ["todo-list-item"]
  if (todo.done) {
    classNames.push('done')
  }

  if (todo.important) {
    classNames.push('important')
  }

  return (
    <span className={classNames.join(' ')}>
      <span
        className="todo-list-item-label list"
        onClick={() => dispatch(doneItem(todo))}>
        {todo.label}
      </span>
      <button type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => dispatch(importantItem(todo))}>
        <i className="fa fa-exclamation" />
      </button>
      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={() => openModalWindow(todo.id)}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  )
}

export default TodoList





// export interface ParentProps {
//   todo: TodoItemProps,
//   openModalWindow(id: string): void
// }

// export interface TodoItemProps {
//   id: string
//   label: string
//   important: boolean
//   done: boolean
// }

// type Props = ParentProps & ReturnType<typeof mapDispatchToProps>

// class TodoList extends Component<Props> {
//   render(): JSX.Element {
//     const { onDoneItem, onImportantItem, openModalWindow, todo } = this.props;

//     let classNames = ["todo-list-item"]
//     if (todo.done) {
//       classNames.push('done')
//     }

//     if (todo.important) {
//       classNames.push('important')
//     }

//     return (
//       <span className={classNames.join(' ')}>
//         <span
//           className="todo-list-item-label list"
//           onClick={() => onDoneItem(todo)}>
//           {todo.label}
//         </span>
//         <button type="button"
//           className="btn btn-outline-success btn-sm float-right"
//           onClick={() => onImportantItem(todo)}>
//           <i className="fa fa-exclamation" />
//         </button>
//         <button type="button"
//           className="btn btn-outline-danger btn-sm float-right"
//           onClick={() => openModalWindow(todo.id)}

//         >
//           <i className="fa fa-trash-o" />
//         </button>
//       </span>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   onDoneItem: (p: TodoItemProps) => dispatch(doneItem(p)),
//   onImportantItem: (p: TodoItemProps) => dispatch(importantItem(p))
// })

// export default connect(null, mapDispatchToProps)(TodoList)

