import React from 'react';
import {ReactComponent as Logo} from "../../images/icon_logo2.svg";
export default function NavBar(){
  return(
    <header className="cabecario">
        <h2 className="logo"><a href="index.html"><Logo></Logo></a></h2>
        <nav className="menu">
            <ul className="menu__lista">
                <li className="menu__item"><a href="selecionaPlano.html">Matricule-se</a></li>
                <li className="menu__item"><a href="#cursos">Cursos</a></li>
                <li className="menu__item"><a href="#depoimentos">Fale-Conosoco</a></li>
            </ul>
        </nav>
    </header>
  )
}