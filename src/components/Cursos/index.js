import React from 'react';

export default function Cursos(){
  return(
    <section className="secao__cursos"id="cursos">
        <h2 className="titulo">Cursos</h2>
        <nav>
            <ul className="cursos">
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Violão</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Guitarra</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Baixo</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Teclado</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Piano</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Bateria</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Canto</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Saxofone</a></li>
                <li className="cursos__item"><a href="./index.html" className="cursos__link">Arpa</a></li>
            </ul>
        </nav>
    </section>
  )
}