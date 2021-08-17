import React from 'react';
import {Link} from 'react-router-dom';
export default function PlanoSelection() {
  return (
    <div>
      <h1 className="planos-titulo">Desperte o músico que há dentro de você!</h1>
      <div className="planos-c">
        <div className="plano">
          <h2 className="plano__titulo">Curso 1</h2>
          <h3 className="plano__subtitulo">Subtitulo</h3>
          <h2 className="plano__price">R$00,00</h2>
          <ul className="plano__atributos">
            <li><i className="fas fa-check"></i>Propriedade1</li>
            <li><i className="fas fa-check"></i>Propriedade2</li>
            <li><i className="fas fa-check"></i>Propriedade3</li>
            <li><i className="fas fa-check"></i>Propriedade4</li>
            <li><i className="fas fa-check"></i>Propriedade5</li>
            <li><i className="fas fa-check"></i>Propriedade6</li>
          </ul>
          <Link to="/cadastro"><button>Matricule-se</button></Link>
        </div>
        <div className="plano">
          <h2 className="plano__titulo">Curso 2</h2>
          <h3 className="plano__subtitulo">Subtitulo</h3>
          <h2 className="plano__price">R$00,00</h2>
          <ul className="plano__atributos">
            <li><i className="fas fa-check"></i>Propriedade1</li>
            <li><i className="fas fa-check"></i>Propriedade2</li>
            <li><i className="fas fa-check"></i>Propriedade3</li>
            <li><i className="fas fa-check"></i>Propriedade4</li>
            <li><i className="fas fa-check"></i>Propriedade5</li>
            <li><i className="fas fa-check"></i>Propriedade6</li>
          </ul>
          <Link to="/cadastro"><button>Matricule-se</button></Link>
        </div>
        <div className="plano plano-selected">
          <h2 className="plano__titulo">Curso</h2>
          <span className="plano__etiqueta">Popular</span>
          <h3 className="plano__subtitulo">Subtitulo</h3>
          <h2 className="plano__price">R$00,00</h2>
          <ul className="plano__atributos">
            <li><i className="fas fa-check"></i>Propriedade1</li>
            <li><i className="fas fa-check"></i>Propriedade2</li>
            <li><i className="fas fa-check"></i>Propriedade3</li>
            <li><i className="fas fa-check"></i>Propriedade4</li>
            <li><i className="fas fa-check"></i>Propriedade5</li>
            <li><i className="fas fa-check"></i>Propriedade6</li>
          </ul>
          <Link to="/cadastro"><button>Matricule-se</button></Link>
        </div>
      </div>
    </div>
  )
}