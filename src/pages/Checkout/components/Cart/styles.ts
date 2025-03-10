import styled from "styled-components";

export const CartContainer = styled.div `
    > p {
        font-family: "Baloo 2";
        font-size: 1.125rem;
        font-weight: bold;
    }
`

export const BoxContainer = styled.div `
    width: 448px;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 2.5rem;
    background-color: ${props => props.theme.baseCard};
`

export const CoffeeCosts = styled.div `
    margin-top: 0.3rem;
` 

const CartPrice = styled.div `
    display: flex;
    justify-content: space-between;

    width: 100%;

`

export const TotalAndShipment = styled(CartPrice) `
    color: ${props => props.theme.baseText};

    p:first-child {
        font-size: 0.875rem;
    }

    p:last-child {
        font-size: 1rem;
    }
`

export const PriceTitle = styled(CartPrice) `
    color: ${props => props.theme.baseSubtitle};
    font-size: 1.25rem;
    font-weight: bold;
`

export const SubmitButton = styled.button `
    display:  flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 46px;

    border: 0;
    border-radius: 6px;
    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.white};

    font-size: 0.875rem;
    font-weight: bold;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1)
    }

`