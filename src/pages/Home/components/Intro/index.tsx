/* eslint-disable react/react-in-jsx-scope */
import { TextInformation,
    HeaderContainer,
    UpperText,
    AttributesContainer,
    ShoppingCartCircle,
    TimerCircle,
    ShipmentCircle,
    CoffeeCircle, 
    ImageContainer,
    RelativeContainer,
    FirstVector,
    SecondVector,
    ThirdVector,
    FourthVector,
    FifthVector,
    SixthVector,
    SeventhVector,
    EigthVector,
    NinethVector,
    TenthVector,
    EleventhVector} from "./styles";

import CoffeeImage from '../../../../assets/CoffeeImage.png'
import Vector1 from '../../../../assets/Background/Vector1.svg'
import Vector2 from '../../../../assets/Background/Vector2.svg'
import Vector3 from '../../../../assets/Background/Vector3.svg'
import Vector4 from '../../../../assets/Background/Vector4.svg'
import Vector5 from '../../../../assets/Background/Vector5.svg'
import Vector6 from '../../../../assets/Background/Vector6.svg'
import Vector7 from '../../../../assets/Background/Vector7.svg'
import Vector8 from '../../../../assets/Background/Vector8.svg'
import Vector9 from '../../../../assets/Background/Vector9.svg'
import Vector10 from '../../../../assets/Background/Vector10.svg'
import Vector11 from '../../../../assets/Background/Vector11.svg'

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

export function Intro() {
    return (
        <HeaderContainer>
            <RelativeContainer>
                <TextInformation>
                    <UpperText>
                        <strong>Encontre o café perfeito para qualquer hora do dia.</strong>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </UpperText>
                    <AttributesContainer>
                        <div>
                            <ShoppingCartCircle>
                                <ShoppingCart weight="fill" size={16}/>
                            </ShoppingCartCircle>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <ShipmentCircle>
                                <Package weight="fill" size={16}/>
                            </ShipmentCircle>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <TimerCircle>
                                <Timer weight="fill" size={16}/>
                            </TimerCircle>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                            <div>
                                <CoffeeCircle>
                                    <Coffee weight="fill" size={16}/>
                                </CoffeeCircle>
                                <p>O café chega fresquinho até você</p>
                            </div>
                    </AttributesContainer>
                </TextInformation>
                <ImageContainer>
                    <img src={CoffeeImage} alt="Copo e sementes de café"></img>
                </ImageContainer>
            </RelativeContainer>
            <FirstVector src={Vector1} />
            <SecondVector src={Vector2}/>
            <ThirdVector src={Vector3}/>
            <FourthVector src={Vector4}/>
            <FifthVector src={Vector5}/>
            <SixthVector src={Vector6}/>
            <SeventhVector src={Vector7}/>
            <EigthVector src={Vector8}/>
            <NinethVector src={Vector9}/>
            <TenthVector src={Vector10}/>
            <EleventhVector src={Vector11}/>
        </HeaderContainer>
    )
}  