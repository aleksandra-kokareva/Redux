import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuidv1 } from 'uuid';
import { TodoItemProps } from "../ListItem/ListItem";
import { createItem } from "../store/action/itemActions";
import { Dispatch } from "../store";

const AddForm: React.FC = () => {

    const [label, setLabel] = useState('')
    const dispatch = useDispatch<Dispatch>()
    const createNewItem = useSelector((state: TodoItemProps) => {
        return {
            id: uuidv1(),
            label: label,
            important: false,
            done: false
        }
    })
    
    const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const label = event.target.value
        setLabel(label)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        dispatch(createItem(
            createNewItem))
        setLabel('')
    }

    return (
        <form className="item-add-form d-flex"
            onSubmit={onSubmit}  >
            <input type='text'
                className='form-control'
                onChange={onLabelChange}
                placeholder="What needs to be done"
                value={label} />
            <button
                className='btn btn-outline-secondary'>
                Add
                </button>
        </form>
    )
}

export default  AddForm



// interface AddFormState {
//     label: string
// }

// type ComponentProps = ReturnType<typeof mapDispatchToProps>;

// class AddForm extends Component<ComponentProps, AddFormState> {
//     state: AddFormState = {
//         label: ''
//     }

//     public onLabelChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//         this.setState({
//             label: event.target.value
//         })
//     }

//     public onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault()
//         this.props.createNewResourse({
//             id: uuidv1(),
//             label: this.state.label,
//             important: false,
//             done: false,
//         });
//         this.setState({
//             label: ''
//         })
//     }
//     render(): JSX.Element {
//         return (
//             <form className="item-add-form d-flex"
//                 onSubmit={this.onSubmit}  >
//                 <input type='text'
//                     className='form-control'
//                     onChange={this.onLabelChange}
//                     placeholder="What needs to be done"
//                     value={this.state.label} />
//                 <button
//                     className='btn btn-outline-secondary'>
//                     Add
//                 </button>
//             </form>
//         )
//     }

// }

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     createNewResourse: (p: TodoItemProps) => dispatch(createItem(p))
// })

// export default connect(() => ({}), mapDispatchToProps)(AddForm);
