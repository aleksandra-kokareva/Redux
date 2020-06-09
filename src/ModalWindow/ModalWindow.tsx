import React, { Component } from 'react'
import './ModalWindow.css'
import { connect, useDispatch , useSelector} from "react-redux";
import { TodoItemProps } from "../ListItem/ListItem";
import { Dispatch } from "../store";
import { deleteItem } from "../store/action/itemActions";

interface ParentProps {
  content: TodoItemProps | undefined
  onClose(id: any): void
}

const ModalWindow: React.FC<ParentProps> = ({content, onClose}) => {

  const dispatch = useDispatch<Dispatch>()
//   const deleteNewItem = useSelector((state: TodoItemProps) => {
//     return {
//         id: null,
//         label: null,
//         important: null,
//         done: false
//     }
// // })
const deleteNewItem = useSelector((state: TodoItemProps) => state)

  return(
    <>
        <div className="modal ">
          <div className=" modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Delete Item</h3>
              </div>
              <div className="modal-body">
                <p>Do you want delete {content?.label}?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={() => dispatch(deleteItem(content))}>Delete</button>
                {/* <button className="btn btn-primary" onClick={() => this.deleteItem(content)}>Delete</button> */}
                {/* <button className="btn btn-primary" onClick={() => dispatch(deleteNewItem(deleteItem(content)))}>Delete</button> */}
                <button className="btn btn-secondary" onClick={onClose}>Close
                </button>
              </div>
            </div></div>
        </div>
      </>
  )
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDeleteItem: (p: TodoItemProps) => dispatch(deleteItem(p))
})

export default ModalWindow

// class ModalWindowd extends Component<Props> {

//   deleteItem = (content: any) => {
//     this.props.onDeleteItem(content)
//     this.props.onClose(null);
//   }

//   render(): JSX.Element {
//     const { content } = this.props;

//     return (
//       <>
//         <div className="modal ">
//           <div className=" modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h3 className="modal-title">Delete Item</h3>
//               </div>
//               <div className="modal-body">
//                 <p>Do you want delete {this.props.content?.label}?</p>
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-primary" onClick={() => this.deleteItem(content)}>Delete</button>
//                 <button className="btn btn-secondary" onClick={this.props.onClose}>Close
//                 </button>
//               </div>
//             </div></div>
//         </div>
//       </>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   onDeleteItem: (p: TodoItemProps) => dispatch(deleteItem(p))
// })

// export default connect(null, mapDispatchToProps)(ModalWindow)



// interface ParentProps {
//   content: TodoItemProps | undefined
//   onClose(id: any): void
// }

// type Props = ParentProps & ReturnType<typeof mapDispatchToProps>;

// class ModalWindow extends Component<Props> {

//   deleteItem = (content: any) => {
//     this.props.onDeleteItem(content)
//     this.props.onClose(null);
//   }

//   render(): JSX.Element {
//     const { content } = this.props;

//     return (
//       <>
//         <div className="modal ">
//           <div className=" modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h3 className="modal-title">Delete Item</h3>
//               </div>
//               <div className="modal-body">
//                 <p>Do you want delete {this.props.content?.label}?</p>
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-primary" onClick={() => this.deleteItem(content)}>Delete</button>
//                 <button className="btn btn-secondary" onClick={this.props.onClose}>Close
//                 </button>
//               </div>
//             </div></div>
//         </div>
//       </>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   onDeleteItem: (p: TodoItemProps) => dispatch(deleteItem(p)),
// })

// export default connect(null, mapDispatchToProps)(ModalWindow);