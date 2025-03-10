/* eslint-disable react/react-in-jsx-scope */

import { useContext, useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { Coffee, CoffeeActions, CoffeeActionsButtonContainer, CoffeeQuantities, CoffeeTag } from "./styles";
import { OrderContext } from "../../../../contexts";

interface Coffee {
    id: number;
    imgSRC: string,
    tags: string[],
    title: string,
    description: string,
    price: number;
    quantity?: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function Card({ coffee }: CoffeeProps) {
    const { addNewCoffee } = useContext(OrderContext)

    const [quantidadeDeCafé, setQuantidadeDeCafé] = useState(0)

    function alterarQuantidadeDeCafé(type: boolean) {
        if (type) {
            setQuantidadeDeCafé(state => state + 1)
            return
        }

        if (!type) {
            if (quantidadeDeCafé === 0) {
                return
            } else {
                setQuantidadeDeCafé(state => state - 1)
                return
            }
        }
    }

    function enviarAoCarrinho() {
        addNewCoffee({...coffee, quantity: quantidadeDeCafé})
        setQuantidadeDeCafé(0)
    }

    return (
            <Coffee>
                <img src={coffee.imgSRC}></img>
                <div>
                    {coffee.tags.map((tag, index) => {
                            return (
                                <CoffeeTag
                                key={index}>
                                    {tag}
                                </CoffeeTag>
                            )
                        })}
                </div>
                <strong>{coffee.title}</strong>
                <p>{coffee.description}</p>
                <CoffeeActions>
                    <p><span>R$</span>9,90</p>
                    <CoffeeActionsButtonContainer>
                        <CoffeeQuantities>
                            <Minus size={22} weight="bold"
                                onClick={() => alterarQuantidadeDeCafé(false)}
                            />
                            <p>{quantidadeDeCafé}</p>
                            <Plus size={22} weight="bold"
                                onClick={() => alterarQuantidadeDeCafé(true)}
                            />
                        </CoffeeQuantities>
                        <div>
                            <ShoppingCartSimple
                            size={22}
                            weight="fill"
                            onClick={enviarAoCarrinho}
                            />
                        </div>
                    </CoffeeActionsButtonContainer>
                </CoffeeActions>
            </Coffee> 
            )
}