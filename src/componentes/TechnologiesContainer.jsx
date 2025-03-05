import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejs,
  DiMysql,
  DiReact,
  DiLaravel,
  DiPhp,
} from "react-icons/di"

import "../styles/componentes/technologiescontainer.sass"

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, label: "Linguagem de marcação usada para estruturar páginas web." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, label: "Estilização de páginas web, incluindo layouts, cores e animações." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, label: "Linguagem de programação para interatividade em páginas web." },
  { id: "node", name: "Node.js", icon: <DiNodejs />, label: "Ambiente para executar JavaScript no servidor, usado para APIs e aplicações escaláveis." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, label: "Banco de dados relacional usado para armazenar e gerenciar informações." },
  { id: "react", name: "React", icon: <DiReact />, label: "Biblioteca JavaScript para construção de interfaces de usuário reativas." },
  { id: "laravel", name: "Laravel", icon: <DiLaravel />, label: "Framework PHP para desenvolvimento de aplicações web robustas e escaláveis." },
  { id: "php", name: "PHP", icon: <DiPhp />, label: "Linguagem de programação para desenvolvimento web e sistemas backend." }
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map(tech => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>
                {tech.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer