import React from 'react';
import instagram from "../../images/instagram-brands.svg";
import linkedin from "../../images/linkedin-in-brands.svg";
import youtube from "../../images/youtube-brands.svg";
import github from "../../images/icone_github.svg";

export default function Footer() {
  return (
    <footer className="rodape">
      <h2 className="rodape__texto"> Copyrights&copy; Autor: <a href="https://alexricc2.github.io/" className="link">Alex Sant'Anna</a></h2>
      <div>
        <a href="https://www.instagram.com/alex_ricardu/" target="_blank" rel="noreferrer">
          <img src={instagram} className="rodape__icones" alt="instagram do criador"/>
        </a>
        <a href="https://www.linkedin.com/in/alex-ricardo-rodrigues-sant-anna/" target="_blank" rel="noreferrer">
          <img src={linkedin} className="rodape__icones" alt="linkedin do criador"/>
        </a>
        <a href="https://www.youtube.com/channel/UCubvUoQdw0_RSv8P3Rgfekg" target="_blank" rel="noreferrer">
          <img src={youtube} className="rodape__icones" alt="youtube do criador"/>
        </a>
        <a href="https://github.com/alexRicc2" target="_blank" rel="noreferrer">
          <img src={github} className="rodape__icones" alt="github do criador"/>  
        </a>
      </div>
    </footer>
  )
}