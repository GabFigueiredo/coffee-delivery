/* eslint-disable react/react-in-jsx-scope */

import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";

export function Home() {
    return (
        <> 
            <Intro />
           <CoffeeList />
       </>
    )
}