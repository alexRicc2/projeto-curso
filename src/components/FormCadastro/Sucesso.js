import React from 'react';
import {Link} from 'react-router-dom'

export default function Sucesso({FormData}){

  const {nome} = FormData;

  return(
    <>
    <h1>Parabens {nome} voce foi cadastrado com Sucesso!</h1>
    <Link to="/"> Voltar ao menu Principal</Link>
    </>
  )
}