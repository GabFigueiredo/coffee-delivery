import styled from "styled-components";

export const MainContainer = styled.form `
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
`
export const FormContainer = styled.div`

    max-width: 640px;
    width: 100%;

    > div > p:first-child {
        font-family: "Baloo 2";
        font-size: 1.125rem;
        font-weight: bold;
    }

`

const FormTitle = styled.div `
    display: flex;
    gap: 0.5rem;


    p {
        line-height: 1.30;
    }

    > div > p:first-child {
        color: ${props => props.theme.baseSubtitle};
        font-size: 1rem;
    }

    > div > p:last-child {
        color: ${props => props.theme.baseText};
        font-size: 0.875rem;
    }

`

export const ShipmentInfo = styled(FormTitle) `
    svg {
        color: ${props => props.theme.yellowDark}
    }
`


export const PaymentInfo = styled(FormTitle) `
    svg {
        color: ${props => props.theme.purpleDark}
    }
`

export const BoxContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;
    background-color: ${props => props.theme.baseCard};
`

export const InputContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    column-gap: 0.75rem;
`

const DefaultInput = styled.input `

    border: solid 1px ${props => props.theme.baseButton};

    background-color: ${props => props.theme.baseInput};
    color: ${props => props.theme.baseSubtitle};
    border-radius: 4px;

    padding: 8px;

    &::placeholder {
        color: ${props => props.theme.baseLabel};
    }
`

export const InputTamanho200 = styled(DefaultInput) `
    max-width: 200px; 
    width: 100%;
`

export const InputComFlex1 = styled(DefaultInput) `
    flex: 1;
`

export const RUAInput = styled(DefaultInput) `
    width: 100%;
`

export const UFInput = styled(DefaultInput) `
    max-width: 60px; 
    width: 100%;
`
export const PaymentContainer =  styled.div `
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
`


export const PaymentOption = styled.div`
    position: relative;
    width: 11.1rem;

    input#debit,
    input#credit,
    input#cash {
    display: none;
    }

    label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    background-color: ${(props) => props.theme.baseButton};
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.2s, border 0.2s;

    p {
        font-size: 0.75rem;
        color: ${(props) => props.theme.baseText};
        line-height: 1.6;
    }

    svg {
        color: ${(props) => props.theme.purple};
    }
    }

    label:hover {
    background-color: ${(props) => props.theme.purpleLight};
    }

    label:active {
    background-color: ${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.purple};
    }

    input:checked + label {
    background-color: ${(props) => props.theme.purpleLight};
    border: 2px solid ${(props) => props.theme.purple};
    }
`;
