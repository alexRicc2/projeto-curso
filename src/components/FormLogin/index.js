import React from 'react';
import google from '../../images/icone_google.png';
import facebook from '../../images/icone_facebook.png';
export default function FormLogin(){
  return(
    <form className="form" id="matricula">
        <span className="form__titulo">Já sou Aluno</span>
        <div className="form__input">
            <input type="email" name="email" className="form__input__input" placeholder="Email" data-form-email/>
        </div>

        <div className="form__input">
            <input type="password" name="password" className="form__input__input" placeholder="Password" data-form-senha/>
        </div>
        <div className="form__secao">
            <div>
                <input type="checkbox" id="ckb"/>
                <label for="ckb">Lembrar de mim</label>
            </div>
            <div>
              <a href="#" className="form__esqueci">Esqueci a senha</a>  
            </div>
        </div>
        <div className="form__btn">
            <button className="form__login" data-form-botao>
                Login
            </button>
        </div>
        <div className="form__cadastro">
            <span>Ou cadastre-se usando</span>
        </div>

        <div className="form__redes">
            <a href="#" className="cadastro__icones"><img src={google} style={{width: "24px"}}/></a>
            <a href="#"><img src={facebook}/></a>
        </div>
    </form>
  )
}