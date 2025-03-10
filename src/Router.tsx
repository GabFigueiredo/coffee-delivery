/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { HeaderLayout } from './layouts/HeaderLayout'
import { Success } from './pages/Success'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<HeaderLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/success' element={<Success />}/>
            </Route>
        </Routes>
    )
}