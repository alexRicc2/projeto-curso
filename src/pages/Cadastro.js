import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import UseForm from '../components/FormCadastro/UseForm';
export default function Cadastro(){
  return(
    <div>
      <NavBar/>
      <UseForm/>
      <Footer/>
    </div>
  )
}