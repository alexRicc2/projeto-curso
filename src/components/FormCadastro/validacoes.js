
const validaCpf = function(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto: "Deve conter 11 dígitos"}
  }
  return {valido: true, texto: ""}
}
const validaNome = function(nome){
  const regex = /^[a-zA-Zéúáã\s]+$/
  if(nome.length === 0){
    return {valido: false, texto: "O nome não deve ser deixado em branco"}
  }
  else if(!regex.test(nome)){
    return {valido: false, texto: "O nome deve conter apenas letras"}
  }
  else{
    return {valido: true, texto: ""}
  }
}
const validaEmail = function(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if(!regex.test(email)){
    return {valido: false, texto: "Email invalido"}
  }
  return {valido: true, texto: ""}
}
const validaCell = function(cell){
  if(cell.length < 10){
    return {valido: false, texto:"Número inválido"}
  }
  return {valido: true, texto: ""}
}


export const validacoes = { validaCpf, validaNome, validaEmail, validaCell}
