import React from 'react';
import {ReactComponent as Logo} from "../../images/icon_logo2.svg";
export default function NavBar(){
  return(
    <header class="cabecario">
        <h2 class="logo"><a href="index.html"><Logo></Logo></a></h2>
        <nav class="menu">
            <ul class="menu__lista">
                <li class="menu__item"><a href="selecionaPlano.html">Matricule-se</a></li>
                <li class="menu__item"><a href="#cursos">Cursos</a></li>
                <li class="menu__item"><a href="#depoimentos">Fale-Conosoco</a></li>
            </ul>
        </nav>
    </header>
  )
}