/* eslint-disable react/react-in-jsx-scope */

import { CoffeesContainer, MainContainer } from "./styles";
import Tradicional from '../../../../assets/coffees/Tradicional.png'
import Americano from '../../../../assets/coffees/Americano.png'
import Cremoso from '../../../../assets/coffees/Cremoso.png'
import Gelado from '../../../../assets/coffees/Expresso-gelato.png'
import CaféComLeite from '../../../../assets/coffees/Café-com-Leite.png'
import Macchiato from '../../../../assets/coffees/Macchiato.png'
import ChocolateQuente from '../../../../assets/coffees/Chocolate-quente.png'
import Capuccino from '../../../../assets/coffees/Capuccino.png'
import Cubano from '../../../../assets/coffees/Cubano.png'
import Havaiano from '../../../../assets/coffees/Havaiano.png'
import Árabe from '../../../../assets/coffees/Árabe.png'
import Irlandês from '../../../../assets/coffees/Irlandês.png'
import { Card } from "../Card";

const CoffeesTypes = [
    {
        id: 1,
        imgSRC: Tradicional,
        tags: ["TRADICIONAL"],
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
    },
    {
        id: 2,
        imgSRC: Americano,
        tags: ["TRADICIONAL"],
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90
    },
    {
        id: 3,
        imgSRC: Cremoso,
        tags: ["TRADICIONAL"],
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90
    },
    {
        id: 4,
        imgSRC: Gelado,
        tags: ["TRADICIONAL", "GELADO"],
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90
    },
    {
        id: 5,
        imgSRC: CaféComLeite,
        tags: ["TRADICIONAL", "LEITE"],
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.90
    },
    {
        id: 6,
        imgSRC: Macchiato,
        tags: ["TRADICIONAL", "LEITE"],
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espumav",
        price: 9.90
    },
    {
        id: 8,
        imgSRC: ChocolateQuente,
        tags: ["TRADICIONAL", "LEITE"],
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90
    },
    {
        id: 9,
        imgSRC: Capuccino,
        tags: ["TRADICIONAL", "LEITE"],
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.90
    },
    {
        id: 10,
        imgSRC: Cubano,
        tags: ["TRADICIONAL", "ALCOÓLICO", "GELADO"],
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.90
    },
    {
        id: 11,
        imgSRC: Havaiano,
        tags: ["ESPECIAL"],
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.90
    },
    {
        id: 12,
        imgSRC: Árabe,
        tags: ["ESPECIAL"],
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90
    },
    {
        id: 13,
        imgSRC: Irlandês,
        tags: ["ESPECIAL", "ALCOÓLICO"],
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.90
    },

]

export function CoffeeList() {

    return (
        <MainContainer>
            <strong>Nossos cafés</strong>
            <CoffeesContainer>
                {CoffeesTypes.map(coffee => {
                    return <Card key={coffee.id} coffee={coffee} />
                    })
                }
            </CoffeesContainer>
            
        </MainContainer>
    )
}