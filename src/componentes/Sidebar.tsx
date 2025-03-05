import Avatar from "../img/foto.jpg";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import React from 'react';

import "../styles/componentes/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id = "sidebar">
      <img src={Avatar} alt="Iago Wesley" />
      <p>imagem</p>
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="/curriculo.pdf" className="btn" download>
        Download currículo
      </a>

    </aside>
  )
}

export default Sidebar