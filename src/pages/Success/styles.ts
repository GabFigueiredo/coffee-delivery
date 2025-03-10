import styled from "styled-components";

export const SuccessContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;

    main {
        display: flex;
        flex-direction: column;

        h1 {
            font-family: "Baloo 2";
            font-size: 2rem;
            font-weight: bold;
            color: ${props => props.theme.yellowDark}
        }

        > p {
            font-size: 1.25rem;
            color: ${props => props.theme.baseSubtitle};
            margin-bottom: 2rem;
        }
    }


`

export const DeliveryInformationsContainer = styled.div `
    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
`

export const Info = styled.div `
    padding: 40px;
    background-color: white;
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    article {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        
        p {
            font-size: 1rem;
            color: ${props => props.theme.baseText};
        }

        > svg {
            padding: 8px;
            border-radius: 999px;
            width: 32px;
            height: 32px;
            color: white;
        }
    }

    article:nth-child(1) > svg {
        background-color: ${props => props.theme.purple}; 
    }
    article:nth-child(2) > svg {
        background-color: ${props => props.theme.yellow}; 
    }
    article:nth-child(3) > svg {
        background-color: ${props => props.theme.yellowDark}; 
    }


    > div div {
        display: flex;
        flex-direction: column;
  }
`