import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface Coffee {
    id: number;
    imgSRC: string,
    tags: string[],
    title: string,
    description: string,
    price: number;
    quantity: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CoffeeReducer(state: Coffee[], action: any)  {
    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFEE:
            return produce(state, draft => {
                const index = draft.findIndex(
                    (coffee => coffee.id === action.payload.coffee.id)
                )
                if (index === -1) {
                    draft.push(action.payload.coffee)
                } else {
                    draft[index].quantity += action.payload.coffee.quantity
                }
            })
        case ActionTypes.REMOVE_COFFEE:
            return produce(state, draft => {
                const index = draft.findIndex(
                    coffee => coffee.id === action.payload.coffee.id
                );
                if (draft[index].quantity > 1) {
                    draft[index].quantity--
                } else {
                    draft.splice(index, 1);
                }
            })
        case ActionTypes.REMOVE_WHOLE_COFFEE:
            return produce(state, draft => {
                const index = draft.findIndex(
                    coffee => coffee.id === action.payload.coffee.id
                );
                    draft.splice(index, 1);
            })   
    }
    
    return state
}