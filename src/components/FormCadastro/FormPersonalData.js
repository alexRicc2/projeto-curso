import React from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

export default function FormPersonalData({ FormData, setForm, navigation }) {

  const { nome, email, cpf, cell } = FormData;
  console.log(FormData)
  const opcoes = [
    {
      value: "Cartao de crédito"
    },
    {
      value: "Boleto Bancario"
    }
  ]
  const [pagamento, setPagamento] = React.useState('Cartao de crédito');

  const handleChange = (e) => {
    setPagamento(e.target.value);
    console.log(pagamento)
  }
  return (

    <form className="cadastroFormulario" onSubmit={() => navigation.next()}>
      <h2 className="cadastroFormulario__titulo">Informações pessoais</h2>
      <TextField id="outlined-basic" label="Nome Completo" variant="outlined" name="nome" value={nome} onChange={setForm} required margin="normal" />
      <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={email} onChange={setForm} required margin="normal" />
      <TextField id="outlined-basic" label="CPF" variant="outlined" name="cpf" value={cpf} onChange={setForm}required margin="normal" />
      <TextField id="outlined-basic" label="Celular com DDD" variant="outlined" name="cell" value={cell} onChange={setForm} required margin="normal" />

      <TextField
        id="standard-select-currency"
        select
        label="Pagamento"
        value={pagamento}
        onChange={handleChange}
        helperText="Por favor selecione o método de pagamento"
        variant="outlined"
        margin="normal"
      >
        {opcoes.map((opcao) => (
          <MenuItem key={opcao.value} value={opcao.value}>
            {opcao.value}
          </MenuItem>
        ))}
      </TextField>
      <button type="submit" className="cadastroFormulario__submit">Continuar cadastro</button>
    </form>
  )
}