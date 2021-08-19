import React from 'react';

export default function InformacoesDaCompra(){
  return (
    <div className="mensagem-cadastro">
    <div className="card-mensagem">
      <div className="card-mensagem__header">
        <h1 className="card-mensagem__header__titulo">Informações da sua compra</h1>
      </div>
      <div className="card-mensagem__corpo">
        <h2 className="card-mensagem__plano" id="planoNome">Plano da sua compra</h2>
        <h2 className="card-mensagem__price" id="planoPrice">Preço: 00,00</h2>
        <ul id="planoAtributos">

        </ul>
        <h3 className="card-mensagem__seguro">Compra Segura</h3>
      </div>
      </div>
      </div>
  )
}