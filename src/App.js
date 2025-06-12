// src/App.js
import React from 'react';
import './App.css';

// Importando os componentes
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MessageSection from './components/MessageSection';
import GallerySection from './components/GallerySection';
import TimeTogether from './components/TimeTogether';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

// Importe suas fotos da galeria aqui!
// Certifique-se de que os nomes dos arquivos e os caminhos estejam corretos.
import FotoGaleria1 from './fotos/20230610_215947.jpg'; // Substitua pelo nome real da sua foto
import FotoGaleria2 from './fotos/20230624_125430.jpg'; // Substitua pelo nome real da sua foto
import FotoGaleria3 from './fotos/20230715_175625.jpg'; // Substitua pelo nome real da sua foto
import FotoGaleria4 from './fotos/20230811_145749.jpg'; // Adicione mais conforme necessário
import FotoGaleria5 from './fotos/20231231_234356.jpg';
import FotoGaleria6 from './fotos/20241012_134454.jpg';
import FotoGaleria7 from './fotos/20241116_194816.jpg';
import FotoGaleria8 from './fotos/20241228_131351.jpg';
import FotoGaleria9 from './fotos/20250420_155607.jpg';
import FotoGaleria10 from './fotos/Screenshot_20220904-181439_One UI Home.jpg';


function App() {
  const images = [
    FotoGaleria1,
    FotoGaleria2,
    FotoGaleria3,
    FotoGaleria4,
    FotoGaleria5,
    FotoGaleria6,
    FotoGaleria7,
    FotoGaleria8,
    FotoGaleria9,
    FotoGaleria10,
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MessageSection />
      <GallerySection images={images} />
      <TimeTogether />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;