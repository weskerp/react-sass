import { useState } from "react";
import "../styles/componentes/principalsProjectsContainer.sass";
import project1 from "../img/project1.png";
import project2 from "/landing-page-medica.png";
import project3 from "/memory-game.png";
import project4 from "../img/project4.jpg";

const projetos = [
  { id: "sistema-vendas", name: "Sistema de Vendas", foto: project1, url: "https://sistema-vendas-production.up.railway.app", descricao: 'Projeto de sistema de vendas baseado em Laravel' },
  { id: "sistema-vendas2", name: "Landing Page Médica", foto: project2, url: "https://landingpage-medica.vercel.app" , descricao: 'Landing page médica feira com react e next.js'},
  { id: "sistema-vendas3", name: "Jogo da Memoria", foto: project3, url: "https://memory-game-gamma-blond.vercel.app" , descricao: 'Jogo da memória feito com JavaScript, HTML e CSS'},
  { id: "sistema-vendas4", name: "Sistema de Vendas4", foto: project4, url: "#" },
];

const PrincipalProjectContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % projetos.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="principal-projeto-container">
      <div className="carousel">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {projetos.map((projeto) => (
            <div className="principal-projeto-card" id={projeto.id} key={projeto.id}>
              <div className="principal-projeto-info">
                <h3>{projeto.name}</h3>
                <a href={projeto.url} target="_blanck">
                  <img src={projeto.foto} alt={projeto.name} />
                </a>
                <p>{projeto.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons for navigation */}
        <button className="carousel-btn prev" onClick={handlePrev}>
          ‹
        </button>
        <button className="carousel-btn next" onClick={handleNext}>
          ›
        </button>
      </div>
      {/* Thumbnails */}
      <div className="thumbnail-container">
        {projetos.map((projeto, index) => (
          <img
            key={projeto.id}
            src={projeto.foto}
            alt={projeto.name}
            className={`thumbnail ${index === currentSlide ? "selected-thumbnail" : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default PrincipalProjectContainer;
