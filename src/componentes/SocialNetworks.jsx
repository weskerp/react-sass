import {FaLinkedinIn, FaGithub} from "react-icons/fa"

import '../styles/componentes/SocialNetworks.sass'
import React from 'react'

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedinIn/>, url:'https://linkedin.com/in/iago-cordeiro-763566145/'},
  {name: "github", icon: <FaGithub/>, url:'https://github.com/weskerp/'},
]
const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
      <a href={network.url} target="_black" className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
      ))}
    </section>
  )
}

export default SocialNetworks