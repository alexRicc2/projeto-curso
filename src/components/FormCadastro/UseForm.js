import React, { useState } from 'react';
import FormPersonalData from './FormPersonalData';

export default function UseForm(){
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cell, setCell] = useState("");
  
  const handleChange = input => e =>{
    
  }
  switch(step){
    case 1:
      return(
        <FormPersonalData/>
      )
  }
}
