import React from 'react';

export default function Video(){
  return(

    <section className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZwKhufmMxko" frameborder="0" allowfullscreen title="teste"></iframe>

        <div className="video__texto">
            <h2 className="video__descricao">1 Aula gratis</h2>
            <ul className="video__lista">
                <li>Faça aulas onde e quando quiser</li>
                <li>Compatibilidade mobile com aplicativo próprio</li>
            </ul>
            <h3>OBRIGADO POR VISITAR!!!</h3>
        </div>
    </section>
  )
}