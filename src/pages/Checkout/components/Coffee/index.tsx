/* eslint-disable react/react-in-jsx-scope */

import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { CartCoffee, CoffeeActions, CoffeeInfo, CoffeeQuantities, RemoveButton } from './styles'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts'

export interface Coffee {
    id: number;
    imgSRC: string,
    tags: string[],
    title: string,
    description: string,
    price: number;
    quantity: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function Coffee({coffee}: CoffeeProps) {
    const { removeCoffee, addNewCoffee, removeWholeCoffee } = useContext(OrderContext)
    const [quantidadeDeCafé, setQuantidadeDeCafé] = useState(coffee.quantity)

    function alterarQuantidadeDeCafé(type: boolean) {
        if (type) {
            setQuantidadeDeCafé(state => state + 1)
            addNewCoffee({ ...coffee, quantity: 1})
            return
        }

        if (!type) {
            if (quantidadeDeCafé === 0) {
                removeCoffee(coffee)
                return
            } else {
                setQuantidadeDeCafé(state => state - 1)
                removeCoffee(coffee)
                return
            }
        }
    }


    
    return (
        <CartCoffee>
            <div>
                <CoffeeInfo>
                    <img src={coffee.imgSRC}></img>
                    <div>
                        <p>{coffee.title}</p>
                        <CoffeeActions>
                            <CoffeeQuantities>
                                <Minus size={14} weight="bold"
                                    onClick={() => alterarQuantidadeDeCafé(false)}
                                />
                                <p>{coffee.quantity}</p>
                                <Plus size={14} weight="bold"
                                    onClick={() => alterarQuantidadeDeCafé(true)}
                                />
                            </CoffeeQuantities>
                            <RemoveButton onClick={() => removeWholeCoffee(coffee)}>
                                <Trash size={16}/>
                                <p>REMOVER</p>
                            </RemoveButton>
                        </CoffeeActions>
                    </div>
                </CoffeeInfo>
                <p>R$9,90</p>
            </div> 
        </CartCoffee>
    )
}

