import styled from "styled-components";

export const MainContainer = styled.main `
    width: 100%;

    strong {
        font-family: 'Baloo 2';
        font-size: 2rem;
        color: ${props => props.theme.baseSubtitle};
        font-weight: 900;
        margin-bottom: 3.3rem;
    }

`

export const CoffeesContainer = styled.div `

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    row-gap: 2rem;
`
