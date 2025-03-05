import React from 'react'
import PrincipalProjectContainer from './PrincipalProjects'

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Aqui estão alguns projetos públicos em que trabalhei ou desenvolvi para estudo. 
        A maioria dos projetos em que atuo são privados, portanto, não posso compartilhá-los.
      </p>
      <PrincipalProjectContainer/>
    </section>
  )
}

export default ProjectsContainer