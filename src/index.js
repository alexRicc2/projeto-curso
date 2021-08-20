import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.scss';
import {BrowserRouter} from 'react-router-dom'

fetch('https://graphql.datocms.com/',{
  method: 'POST',
  headers: {
    'authorization' : '098d23c247aae4c160970a002bb5b9',
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
  },
  body: JSON.stringify({ "query": `query {
    allRegisters {
      email
      senha
    }
  }` })
}).then((response) => response.json())
.then((respostaCompleta) => {
  const usuarios = respostaCompleta.data.allRegisters
  console.log(usuarios)})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
