import { ADD_ITEM, DELETE_ITEM, DONE_ITEM, IMPORTANT_ITEM } from '../../../constants'
import { TodoItemProps } from "../../../ListItem/ListItem";
import { ArticleActions } from "../../action/itemActions";

export interface TodoState {
    items: TodoItemProps[];    
}

const initialState: TodoState = {
    items: []
}

export const itemReducer = (
    state = initialState,
    action: ArticleActions
): TodoState => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] };
        case DELETE_ITEM:
            console.log('action.payload.id  --: ', action.payload);
            return { ...state, items: state.items.filter(f => f.id !== action.payload?.id) };
        case DONE_ITEM:
            const articles = [...state.items];
            const ind = articles.findIndex((el) => el.id === action.payload.id)
            const oldItem = articles[ind]
            const newItem = { ...oldItem, done: !oldItem.done }
            const newArray = [
                ...articles.slice(0, ind),
                newItem,
                ...articles.slice(ind + 1)
            ]
            return { ...state, items: newArray }
        case IMPORTANT_ITEM:  
            const importItem = [...state.items]
            const indImportant = importItem.findIndex((el) => el.id === action.payload.id)
            const oldImportantItem = importItem[indImportant]
            const newImportantItem = {...oldImportantItem, important: !oldImportantItem.important}
            const newArrayImportant =[
                ...importItem.slice(0, indImportant),
                newImportantItem,
                ...importItem.slice(indImportant + 1),    
            ]
        return {...state, items: newArrayImportant}
        default:
            return state;
    }
}
