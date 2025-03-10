import styled from "styled-components";

export const HeaderContainer = styled.header ` 
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const RelativeContainer = styled.div `
    position: relative;
    z-index: 20;
    width: 100%;

    padding: 6.3rem 0;
    display: flex;
    justify-content: space-between;
`

export const TextInformation = styled.div `
    width: 100%;
    max-width: 588px;
    display: flex;
    flex-direction: column;
    gap: 4.1rem;
`

export const UpperText = styled.div `
    strong {
        font-family: 'Baloo 2';
        font-weight: 900;
        font-size: 3rem;
        color: ${props => props.theme.baseTitle}
    }

    p {
        font-size: 1.25rem;
        color: ${props => props.theme.baseSubtitle};
        margin-top: 1rem;
    }

    svg {
        color: ${props => props.theme.purple};
    }
    
`

export const AttributesContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;

    div {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

`

const AttributeCircle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 1rem;

    padding: 2px;

    svg {
        color: ${props => props.theme.background}
    }

`

export const ShoppingCartCircle = styled(AttributeCircle) `
    background-color: ${props => props.theme.yellowDark};
`

export const TimerCircle = styled(AttributeCircle) `
    background-color: ${props => props.theme.yellow};
`

export const ShipmentCircle = styled(AttributeCircle) `
    background-color: ${props => props.theme.baseText};
`
export const CoffeeCircle = styled(AttributeCircle) `
    background-color: ${props => props.theme.purple};
`

export const ImageContainer = styled.div `
    width: 100%;
    height: 100%;
    max-width: 476px;

`

const BlurContainer = styled.img `
    position: absolute;
    z-index: 10;
    filter: blur(52px);
    -webkit-filter: blur(52px);
`

export const FirstVector = styled(BlurContainer) `
    bottom: 130px;
    left: -170px;
`
export const SecondVector = styled(BlurContainer) `
    top: 130px;
    left: 180px;
`

export const ThirdVector = styled(BlurContainer) `
    bottom: 120px;
    left: 380px;
`

export const FourthVector = styled(BlurContainer) `
    bottom: 80px;
    right: -5px;
`

export const FifthVector = styled(BlurContainer) `
    bottom: 300px;
    left: -90px;
`

export const SixthVector = styled(BlurContainer) `
    top: 350px;
    right: -200px;
`
export const SeventhVector = styled(BlurContainer) `
    top: 100px;
    right: -150px;
`

export const EigthVector = styled(BlurContainer) `
    top: 170px;
    right: 500px;
`

export const NinethVector = styled(BlurContainer) `
    top: 170px;
    right: 350px;
`

export const TenthVector = styled(BlurContainer) `
    bottom: 100px;
    left: 60px;
`

export const EleventhVector = styled(BlurContainer) `
    bottom: 150px;
    right: -150px;
`



