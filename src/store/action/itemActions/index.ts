
import {ADD_ITEM, DELETE_ITEM, DONE_ITEM,  IMPORTANT_ITEM} from '../../../constants'
import {TodoItemProps} from "../../../ListItem/ListItem";

interface CreateItemAction {
  type: typeof ADD_ITEM
  payload: TodoItemProps
}

export const createItem = (payload: TodoItemProps): CreateItemAction => ({
  type: ADD_ITEM,
  payload
})

interface DeleteItemAction {
  type: typeof DELETE_ITEM
  payload: TodoItemProps | undefined
}

export const deleteItem = (payload: TodoItemProps | undefined): DeleteItemAction => {
  return ({
    type: DELETE_ITEM,
    payload
  })
}

interface DoneItemAction {
  type: typeof DONE_ITEM
  payload: TodoItemProps
}

export const doneItem = (payload: TodoItemProps): DoneItemAction => ({
  type: DONE_ITEM,
  payload
})

interface ImportantItemAction {
  type: typeof IMPORTANT_ITEM
  payload: TodoItemProps
}

export const importantItem = (payload: TodoItemProps): ImportantItemAction => ({
  type: IMPORTANT_ITEM,
  payload
})




export type ArticleActions = CreateItemAction | DeleteItemAction | DoneItemAction | ImportantItemAction 
