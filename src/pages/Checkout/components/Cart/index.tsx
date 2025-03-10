/* eslint-disable react/react-in-jsx-scope */

import { useContext } from "react";
import { Coffee } from "../Coffee";
import { BoxContainer, CartContainer, CoffeeCosts, PriceTitle, SubmitButton, TotalAndShipment } from "./styles";
import { OrderContext } from "../../../../contexts";


export function Cart() {
    const { Order } = useContext(OrderContext)

    const totalPrice = Order.reduce((acc, currentValue) => { 
        return acc + (currentValue.price * currentValue.quantity);
    }, 0)

    const totalPriceFormatted = totalPrice.toFixed(2)

    return (
        <CartContainer>
            <p>Cafés Selecionados</p>
            <BoxContainer>
                {Order.map(coffee => (
                    <Coffee key={coffee.id} coffee={coffee}/>
                ))}
                <CoffeeCosts>
                    <TotalAndShipment>
                        <p>Total de itens</p>
                        <p>R$ {totalPriceFormatted}</p>
                    </TotalAndShipment>
                    <TotalAndShipment>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </TotalAndShipment>
                    <PriceTitle>
                        <p>Total</p>
                        <p>R$ {(totalPrice + 3.50).toFixed(2)}</p>
                    </PriceTitle>
                </CoffeeCosts>
                <SubmitButton>
                    CONFIRMAR PEDIDO
                </SubmitButton>
            </BoxContainer>
        </CartContainer>
    )
}