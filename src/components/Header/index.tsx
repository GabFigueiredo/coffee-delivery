/* eslint-disable react/react-in-jsx-scope */

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import CoffeeDeliverylogo from '../../assets/CoffeeDeliverylogo.svg'
import { Cart, CartContainer, CheckoutContainer, NavContainer, ItensNoCarrinho, Location, StyledNavLink } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../contexts'



export function Header() {
    const { Order } = useContext(OrderContext)

    const QuantidadeDeItensNoCarrinho = Order?.length || null;

    return (
        <NavContainer>
            <NavLink to="/">
                <img src={CoffeeDeliverylogo} alt=""></img>
            </NavLink>
            <CheckoutContainer>
                <Location>
                    <MapPin weight='fill' size={22}/>
                    <p>Mogi das Cruzes, SP</p>
                </Location>
                <CartContainer>
                    <StyledNavLink to="checkout">
                        <Cart>
                            <ShoppingCart size={22} weight="fill" />
                        </Cart>
                            {QuantidadeDeItensNoCarrinho &&
                            <ItensNoCarrinho>
                                <p>{QuantidadeDeItensNoCarrinho}</p>
                            </ItensNoCarrinho>}
                    </StyledNavLink>
                </CartContainer>
            </CheckoutContainer>
        </NavContainer>
    )
}