import FormPersonalData from './FormPersonalData';
import FormPagamento from './FormPagamento';
import FormConectar from './FormConectar';
import Sucesso from './Sucesso';
import { useForm, useStep } from 'react-hooks-helper';

export default function UseForm() {

  const defaultData = {
    nome: 'alex Ricardo',
    email: '',
    cpf: '',
    cell: '',
    numCartao: '1',
    titular: '2',
    sobrenome: '3',
    codSeguranca: '5',
    username: '',
    senha1: '',
    senha2: ''
  }
  const steps = [
    { id: 'personalData' },
    { id: 'Pagamento' },
    { id: 'Conectar' },
    { id: 'Sucesso'},
    { id: 'erro'}
  ]
  
  const [FormData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  })
  const props = { FormData, setForm, navigation}

  switch (step.id) {
    case "personalData":
      return (
        <FormPersonalData {...props}/>
      )
    case "Pagamento":
      return (
        <FormPagamento {...props} />
      )
    case "Conectar":
      return (
        <FormConectar {...props}/>
      )
    case "Sucesso":
      return(
        <Sucesso {...props}/>
      )
  }
}
