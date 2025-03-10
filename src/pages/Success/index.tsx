/* eslint-disable react/react-in-jsx-scope */

import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { DeliveryInformationsContainer, Info, SuccessContainer } from "./styles";
import SuccessImage from '../../assets/SuccessImage.png'
import { useContext } from "react";
import { OrderContext } from "../../contexts";

export function Success() {
    const { formData } = useContext(OrderContext)

    return (
        <SuccessContainer>
            <main>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <DeliveryInformationsContainer>
                    <Info>
                        <article>
                            <MapPin weight="fill"/>
                            <div>
                                <p>Entrega em <strong>
                                    {formData.rua},{' '}
                                    {formData.numero} 
                                </strong></p>
                                <p>{formData.bairro} - {formData.cidade}, {formData.uf}</p>
                            </div>
                        </article>
                        <article>
                            <Timer weight="fill"/> 
                            <div>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </article>
                        <article>
                            <CurrencyDollar/>
                            <div>
                                <p>Pagamento na entrega</p>
                                <strong>{formData.formaDePagamento}</strong>
                            </div>
                        </article>
                    </Info>
                </DeliveryInformationsContainer>
            </main>
            <img src={SuccessImage}></img>
        </SuccessContainer>
    )
}