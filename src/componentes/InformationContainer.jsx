import "../styles/componentes/informationcontainer.sass"
import { AiFillPhone, AiFillEnvironment, AiOutlineMail } from "react-icons/ai"
import React from "react"

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(38) 9 9813-4515</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="mail-icon" />
        <div>
          <h3>E-mail</h3>
          <p>iagowesley_nc@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Montezuma - MG</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer
