import React from "react"
import "../styles/componentes/aboutContainer.sass"


const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
        Desde cedo, sempre fui apaixonado por desafios lógicos, matemática e tecnologia. Meu interesse pela programação surgiu naturalmente, pois combina essas três áreas em uma única profissão. Comecei a estudar desenvolvimento de software de forma autodidata ainda no ensino médio e aprofundei meus conhecimentos no curso técnico em Informática. Decidido a seguir carreira na área, ingressei no curso de <span>Ciência da Computação</span> no <span>Instituto Federal do Norte de Minas Gerais (IFNMG)</span>, em Montes Claros - MG.
      </p>
      <p>

        Atualmente, trabalho como <span>desenvolvedor full stack</span> especializado em <span>PHP e Laravel</span>, focado em <span>sistemas multi-tenancy</span>. Atuo na manutenção de sistemas legados, implementação de novas funcionalidades e modernização de aplicações para acompanhar as tendências tecnológicas. Trabalho tanto no <span>front-end</span> quanto no <span>back-end</span>, utilizando a arquitetura <span>MVC (Model-View-Controller)</span>. Além disso, faço análise de Pull Requests, gerencio bancos de dados MySQL e automatizo processos de <span>deploy</span> com <span>Docker</span>.
      </p>
      <p>
        Também realizo projetos como freelancer, desenvolvendo <span>landing pages, sistemas de vendas</span> e sites em <span>React, PHP e WordPress</span>. Minha experiência inclui a criação de soluções personalizadas para diversos clientes, sempre focando em <span>performance, escalabilidade e experiência do usuário</span>.
      </p>
    </section>
  )
}

export default AboutContainer