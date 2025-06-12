import React, { useEffect } from 'react'; // Importar useEffect
import './HeroSection.css';
import HeroBackground from '../fotos/20230326_201536.jpg'; // Importe sua imagem aqui!

function HeroSection() {
  useEffect(() => {
    // Define a variável CSS globalmente ou no elemento raiz da seção
    document.documentElement.style.setProperty('--hero-background-image', `url(${HeroBackground})`);
    // Limpeza ao desmontar o componente
    return () => {
      document.documentElement.style.removeProperty('--hero-background-image');
    };
  }, []); // O array vazio garante que o efeito só rode uma vez na montagem

  return (
    <section className="hero-section"> {/* A classe vai aplicar o estilo do CSS */}
      <div className="hero-content">
        <h2 className="hero-heading">Nossa história, nosso amor.</h2>
        <p className="hero-text">Que este dia seja tão lindo quanto o nosso sentimento.</p>
      </div>
    </section>
  );
}

export default HeroSection;