import styled from "styled-components";

export const CartCoffee = styled.div `
    > div:first-child {
        display: flex;
        justify-content: space-between;
        height: 104px;
        border-bottom: solid 1px ${props => props.theme.baseButton};
    }

    > p:last-child {
        color: ${props => props.theme.baseText};
        font-size: 1rem;
        font-weight: bold;
    }
`

export const CoffeeInfo = styled.div `
    display: flex;

    img {
        width: 4rem;
        height: 4rem;
        margin-right: 0.5rem;
    }

    > div > p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

`
export const CoffeeActions = styled.div `
    display: flex;
    gap: 0.5rem;
`

const ButtonTemplate = styled.div `
    display: flex;
    align-items: center;
    padding: 6px 8px;

    background-color: ${props => props.theme.baseButton};
    border-radius: 6px 8px;
    padding: 6px 8px;

    svg {
        color: ${props => props.theme.purple};
    }

`

export const CoffeeQuantities = styled(ButtonTemplate) `
    width: 72px;

    justify-content: space-around;

    svg {
        cursor: pointer;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }

`

export const RemoveButton = styled(ButtonTemplate) `
    gap: 0.2rem;
    justify-content: center;
    color: ${props => props.theme.baseText};

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    p {
        font-size: 0.75rem;
        font-weight: 400;
    }
`

