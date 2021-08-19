import React from 'react';
import { TextField } from '@material-ui/core';
import arrow from '../../images/arrow.svg';
export default function FormConectar({FormData, setForm, navigation}){

  const {username, senha1, senha2} = FormData

  return (
    <form className="cadastroFormulario" onSubmit={() => navigation.next()}>
    <div className="cadastroFormulario__header">
        <img src={arrow} className="cadastroFormulario__arrow" onClick={() => navigation.previous()} alt="voltar"></img>
        <h2 className="cadastroFormulario__titulo">Acesso à conta</h2>
      </div>
    <TextField label="Username" variant="outlined" value={username} name="username" onChange={setForm} required margin="normal"/>
      <TextField type="password" label="Senha" variant="outlined" value={senha1} name="senha1" onChange={setForm} required margin="normal"/>
      <TextField type="password" label="Confirmar Senha" variant="outlined" value={senha2} name="senha2" onChange={setForm} required margin="normal"/>
    <button type="submit" className="cadastroFormulario__submit">Finalizar Cadastro</button>
    </form>
  )
}