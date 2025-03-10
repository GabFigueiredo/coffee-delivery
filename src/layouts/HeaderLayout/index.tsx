/* eslint-disable react/react-in-jsx-scope */

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/index"
import { ResponsiveLayout } from "./styles";

export function HeaderLayout() {
    return (
        <ResponsiveLayout>
            <Header />
            <Outlet />
        </ResponsiveLayout>
    )   
}