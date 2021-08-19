import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import UseForm from '../components/FormCadastro/UseForm';
import InformacoesDaCompra from '../components/FormCadastro/InformaçoesDaCompra';
export default function Cadastro(){
  return(
    <div>
      <NavBar/>
      <main className="cadastroFormulario-main">
      <UseForm/>
      <InformacoesDaCompra/>
      </main>
      <Footer/>
    </div>
  )
}