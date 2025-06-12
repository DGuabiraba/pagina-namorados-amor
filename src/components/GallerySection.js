import React, { useState, useEffect } from 'react';
import './GallerySection.css'; // Importa o CSS para este componente

function GallerySection({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para a próxima foto
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para ir para a foto anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Efeito para auto-play (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a foto a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [currentIndex, images.length, nextSlide]); // Re-executa se o índice ou número de imagens mudar

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Um pouco da gente </h2>

      <div className="carousel-container">
        {/* Botão Anterior */}
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094; {/* Caractere de seta para a esquerda */}
        </button>

        {/* Imagem Atual do Carrossel */}
        <div className="carousel-slide">
          {images.length > 0 ? (
            <img
              src={images[currentIndex]}
              alt={`Nosso Momento ${currentIndex + 1}`}
              className="carousel-image"
            />
          ) : (
            <p className="no-images-message">Nenhuma imagem disponível.</p>
          )}
        </div>

        {/* Botão Próximo */}
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095; {/* Caractere de seta para a direita */}
        </button>

        {/* Indicadores de slide (bolinhas) - Opcional, mas melhora a UX */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <p className="gallery-hint">estrada até aqui !!!</p>
    </section>
  );
}

export default GallerySection;