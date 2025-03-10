/* eslint-disable react/react-in-jsx-scope */

import { createContext, ReactNode, useReducer, useState, } from "react";
import { CoffeeReducer } from "../reducers/coffee/reducer";
import { addNewCoffeeAction, removeNewCoffeeAction, removeWholeCoffeeAction } from "../reducers/coffee/actions";

interface Coffee {
    id: number;
    imgSRC: string;
    tags: string[];
    title: string;
    description: string;
    price: number;
    quantity: number;
}

interface OrderContextProviderProps {
    children: ReactNode
}

interface FormData {
    cep: string;
    rua: string;
    numero: number;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
    formaDePagamento?: string;
}

interface OrderContextType {
    Order: Coffee[];
    addNewCoffee: (coffee: Coffee) => void;
    removeCoffee: (coffee: Coffee) => void;
    removeWholeCoffee: (coffee: Coffee) => void;
    formData: FormData;
    setFormData: (data: FormData) => void;
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
    const [formData, setFormData] = useState<FormData>({
        cep: '',
        rua: 'NÃO FOI ALTERADO',
        numero: 0,
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        formaDePagamento: ''
    });

    const [Order, dispatch] = useReducer(CoffeeReducer, [])
    
    function addNewCoffee(CoffeeToAdd: Coffee) {
        dispatch(addNewCoffeeAction(CoffeeToAdd))
        console.log(Order)
    }

    function removeCoffee(CoffeeToRemove: Coffee) {
        dispatch(removeNewCoffeeAction(CoffeeToRemove))
    }

    function removeWholeCoffee(CoffeeToRemove: Coffee) {
        dispatch(removeWholeCoffeeAction(CoffeeToRemove))
    }

    return (
        <OrderContext.Provider
            value={{
                Order,
                addNewCoffee,
                removeCoffee,
                removeWholeCoffee,
                formData,
                setFormData,
            }}
        >
           {children}
        </OrderContext.Provider>
    )
}