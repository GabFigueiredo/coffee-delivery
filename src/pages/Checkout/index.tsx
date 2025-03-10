/* eslint-disable react/react-in-jsx-scope */

import { useContext } from 'react'
import { Cart } from './components/Cart'
import { BoxContainer, FormContainer,
    InputComFlex1, InputContainer,
    InputTamanho200, MainContainer,
    PaymentContainer,
    PaymentInfo,
    PaymentOption,
    RUAInput, ShipmentInfo, UFInput } from './styles'
import { OrderContext } from '../../contexts'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'

interface FormData {
    cep: string;
    rua: string;
    numero: number;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
    formaDePagamento?: string;
}

export function Checkout() {
    const { register, handleSubmit } = useForm<FormData>()
    const { setFormData } = useContext(OrderContext)
    const navigate = useNavigate()

    function handleFormSubmit(data: FormData) {
        setFormData(data)
        navigate('/success')
    } 

    return (
        <MainContainer onSubmit={handleSubmit(handleFormSubmit)}>
            <FormContainer>
                <div>
                    <p>Complete seu pedido</p>
                </div>
                <div>
                    <BoxContainer>
                        <ShipmentInfo>
                            <MapPinLine size={22}/>
                            <div>
                                <p>Endereço de entrega</p>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </ShipmentInfo>
                        <InputContainer>
                            <InputTamanho200 {...register("cep")} type="text" required placeholder='CEP' />
                            <RUAInput {...register("rua")} type="text" required placeholder='Rua' />
                            <InputTamanho200 {...register("numero")} type="text" required placeholder='Número' />
                            <InputComFlex1 {...register("complemento")} type="text" placeholder='Complemento' />
                            <InputTamanho200 {...register("bairro")} type="text" required placeholder='Bairro' />
                            <InputComFlex1 {...register("cidade")} type="text" required placeholder='Cidade' />
                            <UFInput {...register("uf")} type="text" required placeholder='UF' />
                        </InputContainer>
                    </BoxContainer>
                    <BoxContainer>
                        <PaymentInfo>
                            <CurrencyDollar  size={22}/>
                            <div>
                                <p>Endereço de entrega</p>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </PaymentInfo>

                        <PaymentContainer>
                            <PaymentOption>
                                <input {...register("formaDePagamento", { required: true })}
                                value="Cartão de crédito"
                                type="radio" id="credit" />
                                <label htmlFor="credit">
                                    <CreditCard size={16} />
                                    <p>CARTÃO DE CRÉDITO</p>
                                </label>
                            </PaymentOption>

                            <PaymentOption>
                                <input {...register("formaDePagamento", { required: true })}
                                value="Cartão de débito"
                                type="radio" id="debit"/>
                                <label htmlFor="debit">
                                    <Bank size={16} />
                                    <p>CARTÃO DE DÉBITO</p>
                                </label>
                            </PaymentOption>

                            <PaymentOption>
                                <input {...register("formaDePagamento", { required: true })}
                                value="Dinheiro"
                                type="radio" id="cash" />
                                <label htmlFor="cash">
                                    <Money size={16} />
                                    <p>DINHEIRO</p>
                                </label>
                            </PaymentOption>
                        </PaymentContainer>
                    </BoxContainer>
                </div>
            </FormContainer>
            <Cart />
        </MainContainer>
    )
}