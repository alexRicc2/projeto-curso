import React from 'react';
import { TextField } from '@material-ui/core';
import arrow from "../../images/arrow.svg";
export default function FormPagamento({ FormData, setForm, navigation }) {

  const { numCartao, titular, sobrenome, codSeguranca } = FormData

  return (
    <form className="cadastroFormulario" onSubmit={(event) =>{
      event.preventDefault()
      navigation.next()
    }}>
      <div className="cadastroFormulario__header">
        <img src={arrow} className="cadastroFormulario__arrow" onClick={() => navigation.previous()} alt="voltar"></img>
        <h2 className="cadastroFormulario__titulo">Informações de Pagamento</h2>
      </div>
      <div className="cartoes">
        <span className="ccard MCARD"></span>
        <span className="ccard hipercard"></span>
        <span className="ccard hiper"></span>
        <span className="ccard visa"></span>
        <span className="ccard elo"></span>
        <span className="ccard amex"></span>
      </div>
      <TextField
        id="outlined-basic"
        label="Numero do Cartao"
        variant="outlined"
        value={numCartao}
        name="numCartao"
        onChange={setForm}
        required
        margin="normal" />

      <TextField
        id="outlined-basic"
        label="Nome do titular"
        variant="outlined"
        value={titular}
        name="titular"
        onChange={setForm}
        required
        margin="normal" />

      <TextField
        id="outlined-basic"
        label="Sobrenome"
        variant="outlined"
        value={sobrenome}
        name="sobrenome"
        onChange={setForm}
        required
        margin="normal" />

      <TextField
        id="outlined-basic"
        label="Código de segurança"
        variant="outlined"
        value={codSeguranca}
        name="codSeguranca"
        onChange={setForm}
        required
        margin="normal" />

      <button type="submit" className="cadastroFormulario__submit">Continuar cadastro</button>
    </form>
  )
}