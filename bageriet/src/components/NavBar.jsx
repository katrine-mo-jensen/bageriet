import { NavLink } from "react-router-dom";
import style from "../styling/navbar.module.scss";
import { Search } from "./Search";

export function NavBar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/products">Produkter</NavLink>
        </li>
        <li>
          <h4>bageriet</h4>{" "}
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <Search />
    </nav>
  );
}
