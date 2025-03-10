import styled from "styled-components"

export const Coffee = styled.div `
    width: 256px;
    height: 310px;

    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 7.5rem;
        height: 7.5rem;
    }

    strong {
        font-size: 1.25rem;
        line-height: 1.30;
        margin: 0;
        font-weight: bold;
        text-align: center;
    }
    
    p {
        font-size: 0.875rem;
        line-height: 1.30;
        color: ${props => props.theme.baseLabel};
        text-align: center;
        width: 216px;
    }
`

export const CoffeeTag = styled.span `
    color: ${props => props.theme.yellowDark};
    background-color: ${props => props.theme.yellowLight};
    border-radius: 9999px;
    padding: 4px 6px;
    font-size: 0.625rem;
    font-weight: bold;
`

export const CoffeeActions = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 1rem;


    p {
        width: 72px;
        font-size: 1.5rem;
        line-height: 1.30;
        font-weight: 900;
        font-family: 'Baloo 2';
        color: ${props => props.theme.baseText};
    }

    span:first-child {
        width: 208px;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.30;
        font-family: 'Roboto';
        color: ${props => props.theme.baseText};
        margin-right: 5px;
    }

`

export const CoffeeQuantities = styled.div `
    width: 72px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${props => props.theme.baseButton};
    border-radius: 6px 8px;
    padding: 6px 8px;

    p {
        font-size: 1rem;
        font-family: Roboto;
        font-weight: 400;
    }

    svg {
        color: ${props => props.theme.purple};
        cursor: pointer;
            transition: all 0.2s;
            &:hover {
                transform: scale(1.1)
            }
    }

`


export const CoffeeActionsButtonContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    > div:last-child {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 38px;
        height: 38px;

        background-color: ${props => props.theme.purpleDark};
        color: ${props => props.theme.white};
        border-radius: 8px;
        padding: 3px;

        cursor: pointer;
        transition: all 0.2s;
        &:hover {
            transform: scale(1.1)
        }

    }

`
