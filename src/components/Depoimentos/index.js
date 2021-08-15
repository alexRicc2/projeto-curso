import React from 'react';

export default function Depoimentos(){
  return(
    <section className="comentarios" id="depoimentos">

        <h2 className="comentarios__titulo">Depoimento de quem já foi aluno</h2>

        <div className="comentarios__cards">
            
                <div className="comentarios__card">
                    <div className="foto-comentario comentarios__foto--thais"></div>
                    <h3 className="comentarios__nome">Thais Alixandre</h3>
                    <p className="comentario">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dignissimos dolor itaque expedita corrupti! Fugiat ipsa est, excepturi officiis fuga earum, corrupti cum aliquam beatae eveniet perspiciatis quod obcaecati reprehenderit!</p>
                </div>
                <div className="comentarios__card">
                    <div className="foto-comentario comentarios__foto--matheus"></div>
                    <h3 className="comentarios__nome">Matheus Willian</h3>
                    <p className="comentario">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit tempora excepturi cum laudantium beatae doloribus delectus voluptas deserunt, quidem voluptatem illo amet dolores fuga modi magni repudiandae? Reprehenderit, maiores. Rerum!</p>
                </div>
                <div className="comentarios__card">
                    <div className="foto-comentario comentarios__foto--paola"></div>
                    <h3 className="comentarios__nome">Paola Guedes</h3>
                    <p className="comentario">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorum ad non sequi pariatur, ut perspiciatis dicta voluptas quo facilis dolorem itaque placeat, eius saepe doloribus minima animi vero velit. Realmente mudou a minha vida!!
                    </p>
                </div>        
            </div>

    </section>
  )
}