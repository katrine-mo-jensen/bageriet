import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import style from "../styling/layout.module.scss"

export function Layout (){
    return(
        <>
        <NavBar/>
        <main className={style.mainLayout}>
        <Outlet/>
        </main>
        </>
    )
}