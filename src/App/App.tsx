import React, { Component, useState } from 'react'
import './App.css'
import AppHeader from '../AppHeader/AppHeader'
import SearchPanel from '../SearchPanel/SearchPanel'
import AddForm from '../AddForm/AddForm'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import Pagination from '../Pagination/Pagination'
import ModalWindow from '../ModalWindow/ModalWindow'
import { Route, Switch } from "react-router-dom"
import All from "../components/All"
import Active from "../components/Active"
import Done from "../components/Done"
import history from '../history'
import { connect } from "react-redux"
import { TodoState } from "../store/reducers/itemReducer"

import { TodoItemProps } from "../ListItem/ListItem"
import FetchTodo from '../FetchTodo/fetchTodo'
interface AppState {
  currentPage: number
  todosPerPage: number
  term: string
  filter: string
  currentItem: string
  isModalOpen: boolean
}


type Props = ReturnType<typeof mapStateToProps>;

class App extends Component<Props, AppState> {

  state: AppState = {
    currentPage: 1,
    todosPerPage: 3,
    term: '',
    filter: 'all', //active, all ,done
    currentItem: '',
    isModalOpen: false
  }

  componentDidMount(): void {
    // const { location } = this.props;
    //
    // const search: any = location?.search
    // const parsed = queryString.parse(search)
    // if (parsed.page) {
    //   this.setState({ currentPage: Number(parsed.page) })
    // }

  }

  toggleModal = (id: any) => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen, currentItem: id }))
  }

  onFilterChange = (filter: string): void => {
    this.setState({ filter });
    this.setState({ term: '' });
  }

  search(items: TodoItemProps[], term: string) {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase()
        .indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items: TodoItemProps[], filter: string) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  paginate = (pageNum: number): void => {
    this.setState({ currentPage: pageNum })
  }

  nextPage = (): void => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage + 1 }
    })
  }

  prevPage = (): void => {
    this.setState(prevState => {
      return { currentPage: prevState.currentPage - 1 }
    })
  }

  indexOfLastTodo(currentPage: number, todosPerPage: number): number {
    return currentPage * todosPerPage
  }

  indexOfFirstTodo(indexOfLastTodo: number, todosPerPage: number): number {
    return indexOfLastTodo - todosPerPage
  }


  onSubmitSearch = (term: string) => {
    this.setState({ term })
    if (term) {
      history.push(`search?q=${term}`);
    } else {
      history.push('/');
    }
  }




  render(): JSX.Element {
    const { currentPage, todosPerPage, term, filter, currentItem, isModalOpen } = this.state;
    const location = window.location;

    const { items: todoData } = this.props;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount
    const indexOfLastTodo = currentPage * todosPerPage
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage
    const currentTodos = visibleItems.slice(indexOfFirstTodo, indexOfLastTodo)

  
    const content = todoData.find(f => f.id === currentItem);


    return (
      <>
        <div className="todo-app">
          <AppHeader toDo={todoCount} done={doneCount} />
          <div className="top-panel d-flex">
            <SearchPanel
              onSubmitSearch={this.onSubmitSearch} />
            <ItemStatusFilter filter={filter}
              onFilterChange={this.onFilterChange} />
          </div>
          <Switch>
            <Route exact path="/active" component={() => <Active todos={currentTodos} openModalWindow={this.toggleModal} />} />
            <Route exact path="/done" component={() => <Done todos={currentTodos} openModalWindow={this.toggleModal} />} />
            <Route path="/" component={() => <All todos={currentTodos} openModalWindow={this.toggleModal} />} />
          </Switch>
          <AddForm />
          <div className='container'>
            <Pagination
              todosPerPage={todosPerPage}
              totalTodos={visibleItems.length}
              pageNumbers={[]}
              currentPage={currentPage}
              paginate={this.paginate}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
              location={location}
            />
          </div>
          <>
            {isModalOpen &&
              <ModalWindow content={content} onClose={this.toggleModal} />
            }
          </>
          <FetchTodo />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: { itemReducer: TodoState }) => ({
  items: state.itemReducer.items
  
 
})




export default connect(mapStateToProps)(App);



// interface AppState {
//   currentPage: number
//   todosPerPage: number
//   term: string
//   filter: string
//   currentItem: string
//   isModalOpen: boolean
// }






// // const AppState: IAppState = {
// //   currentPage: 1,
// //   todosPerPage: 2,
// //   term: '',
// //   filter: '',
// //   currentItem: '',
// //   isModalOpen: false
// // }
// // interface Props {
// //   items: TodoItemProps
// // }

// const App: React.FC <AppState> = () => {

//   // state: AppState =  {
//   // currentPage: 1,
//   // todosPerPage: 2,
//   // term: '',
//   // filter: '',
//   // currentItem: '',
//   // isModalOpen: false
//   // }

//   const[currentPage, setCurrentPage] = useState(1)
//   const[todosPerPage, settodosPerPage] = useState(3)
//   const[term, setTerm] = useState('')
//   const[filters, setFilter] = useState('all')
//   const[currentItem, setCurrentItem] = useState('')
//   const[isModalOpen, setIsModalOpen] = useState(false)
 
//   // componentDidMount(): void {
//   //   // const { location } = this.props;
//   //   //
//   //   // const search: any = location?.search
//   //   // const parsed = queryString.parse(search)
//   //   // if (parsed.page) {
//   //   //   this.setState({ currentPage: Number(parsed.page) })
//   //   // }

//   // }

//   const toggleModal = (id: any) => {
//     setIsModalOpen( isModalOpen: !isModalOpen)),
//     setCurrentItem(currentItem(id))
//   }

//   //   toggleModal = (id: any) => {
// //     this.setState(state => ({ isModalOpen: !state.isModalOpen, currentItem: id }))
// //   }

//   const onFilterChange = (filter: string): void => {
//     setFilter(filter)
//     setTerm('')
//   }

//   const search = (items: TodoItemProps[], term: string) => {
//     if (term.length === 0) {
//       return items
//     }
//     return items.filter((item) => {
//       return item.label.toLowerCase()
//         .indexOf(term.toLowerCase()) > -1
//     })
//   }

//   const filter = (items: TodoItemProps[], filter: string) => {
//     switch (filter) {
//       case 'all':
//         return items
//       case 'active':
//         return items.filter((item) => !item.done)
//       case 'done':
//         return items.filter((item) => item.done)
//       default:
//         return items
//     }
//   }

  

//   const nextPage = (): void => {
//     setCurrentPage(currentPage + 1)
//   }

//   const prevPage = (): void => {
//     setCurrentPage(currentPage - 1)
//   }

//   const  paginate = (pageNum: number): void => {
//     setCurrentPage( currentPage(pageNum) )
//   }

 
//   const location = window.location;

//     const onSubmitSearch = (term: string) => {
//       setTerm( term )
//       if (term) {
//         history.push(`search?q=${term}`)
//       } else {
//         history.push('/');
//       }
//     }

//     //  const indexOfLastTodo = (currentPage: number, todosPerPage: number): number => {
//     // return currentPage * todosPerPage

//     // const  indexOfFirstTodo = (indexOfLastTodo: number, todosPerPage: number): number => {
//     // return indexOfLastTodo - todosPerPage
//     // }

//     const doneCount = (todoData: TodoItemProps[]) => {
//       todoData.filter(el => el.done).length
//     } 
//       const todoCount = (todoData: TodoItemProps[], doneCount: number) => {
//         todoData.length - doneCount
//       } 
//     const indexOfLastTodo = currentPage * todosPerPage








//     // const visibleItems = () => {} filter(search(todoData, term), filter);
//     // const doneCount = todoData.filter(el => el.done).length
//     // const todoCount = todoData.length - doneCount
//     // const indexOfLastTodo = currentPage * todosPerPage
//     // const indexOfFirstTodo = indexOfLastTodo - todosPerPage
//     // const currentTodos = visibleItems.slice(indexOfFirstTodo, indexOfLastTodo)

//     return(
//       <>
//         <div className="todo-app">
//           <AppHeader toDo={todoCount} done={doneCount} />
//           <div className="top-panel d-flex">
//             <SearchPanel
//               onSubmitSearch={onSubmitSearch} />
//             <ItemStatusFilter filter={filter}
//               onFilterChange={onFilterChange} />
//           </div>
//           <Switch>
//             <Route exact path="/active" component={() => <Active todos={currentTodos} openModalWindow={this.toggleModal} />} />
//             <Route exact path="/done" component={() => <Done todos={currentTodos} openModalWindow={this.toggleModal} />} />
//             <Route path="/" component={() => <All todos={currentTodos} openModalWindow={this.toggleModal} />} />
//           </Switch>
//           <AddForm />
//           <div className='container'>
//             <Pagination
//               todosPerPage={todosPerPage}
//               totalTodos={visibleItems.length}
//               pageNumbers={[]}
//               currentPage={currentPage}
//               paginate={this.paginate}
//               nextPage={nextPage}
//               prevPage={prevPage}
//               location={location}
//             />
//           </div>
//           <>
//             {isModalOpen &&
//               <ModalWindow content={content} onClose={this.toggleModal} />
//             }
//           </>
//           <FetchTodo />
//         </div>
//       </>
//       )
//   }

// export default App







