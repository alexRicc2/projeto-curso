import React from 'react';
import {Link} from 'react-router-dom';

export default function Central(){
  return (
    <section className="central">
      <h1 className="central__titulo">Professor Ricardo</h1>
      <h2 className="central__subtitulo">Aprenda a tocar os instrumentos que você sempre quis</h2>
      <Link to="/planos" className="btnMatricula">Matricule-se</Link>
    </section>
  )
}