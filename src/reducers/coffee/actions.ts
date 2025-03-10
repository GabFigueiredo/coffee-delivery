import { Coffee } from "./reducer"

export enum ActionTypes {
    ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
    REMOVE_COFFEE = "REMOVE_COFFEE",
    REMOVE_WHOLE_COFFEE = "REMOVE_WHOLE_COFFEE"
}

export function addNewCoffeeAction(CoffeeToAdd: Coffee) {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            coffee: CoffeeToAdd
        }
    }
}

export function removeNewCoffeeAction(CoffeeToRemove: Coffee) {
    return {
        type: ActionTypes.REMOVE_COFFEE,
        payload: {
            coffee: CoffeeToRemove
        }
    }
}
    export function removeWholeCoffeeAction(CoffeeToRemove: Coffee) {
        return {
            type: ActionTypes.REMOVE_WHOLE_COFFEE,
            payload: {
                coffee: CoffeeToRemove
            }
        }
}