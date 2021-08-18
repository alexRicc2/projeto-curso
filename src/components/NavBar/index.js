import React from 'react';
import {Link as Scroll} from 'react-scroll';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../../images/icon_logo2.svg";
export default function NavBar(){
  return(
    <header className="cabecario">
      
        <h2 className="logo"><Link to="/planos"><Logo></Logo></Link></h2>
        <nav className="menu">
            <ul className="menu__lista">
                <li className="menu__item"><Link to="/planos">Matricule-se</Link></li>
                <li className="menu__item">
                  <Scroll to="cursos" spy={true} activeClass="active" smooth={true} duration={700} offset={-50}>Cursos</Scroll>
                  </li>
                <li className="menu__item"><Scroll to="depoimentos" spy={true} activeClass="active" smooth={true} duration={700} offset={0}>Fale conosco</Scroll></li>
            </ul>
        </nav>
    </header>
  )
}