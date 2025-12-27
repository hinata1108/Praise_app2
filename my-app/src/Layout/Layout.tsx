import type { FC } from "react"

//Outletをインポート
import { Outlet } from 'react-router-dom';
import { Header } from "../components/Header";


export const Layout: FC = () => {


    return (
        <>
            <Header/>

            //ここが切り替わる
            <Outlet />

            
        </>
    )

}