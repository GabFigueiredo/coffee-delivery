import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavContainer = styled.nav `
    display: flex;
    justify-content: space-between;
    position: sticky;

    padding: 2rem 0;

`

export const CheckoutContainer = styled.div `
    display: flex;
    gap: 0.75rem;
`

export const Location = styled.div `
    display: flex;
    align-items: center;
    gap: 0.25rem;
    
    border-radius: 8px;
    background-color: ${props => props.theme.purpleLight};
    color: ${props => props.theme.purple};

    font-size: 0.875rem;
    padding: 8px;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    p {
        color: ${props => props.theme.purpleDark};
    }


`

export const StyledNavLink = styled(NavLink) `
    text-decoration: none;

    &:focus {
        outline: none; /* Remove a borda de foco */
    }

    &.active {
        border-bottom: none; /* Remove a borda roxa quando ativo */
    }

`
export const CartContainer = styled.div `
    display: flex;
    gap: 8px;

    a {
        display: flex;
        transition: all 0.2s ease-in-out;

        border: none;
        border: 0;

        &:hover {
            transform: scale(1.2)
        }
    }
`
export const Cart = styled.div `
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.yellowLight};
    color: ${props => props.theme.yellowDark};

    border-radius: 8px;
    padding: 6px 8px 6px 8px;
`

export const ItensNoCarrinho = styled.div `
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center; 
    text-align: center;

    width: 20px;
    height: 20px;

    background-color: ${props => props.theme.yellowDark};
    color: ${props => props.theme.white};

    padding: 2px;
    p {
        font-size: 0.75rem;
        font-weight: bold;
    }

    /* margin-left: -10px;
    margin-top: -7px; */

    left: -10px;
    top: -7px;

    border-radius: 50%;

`

