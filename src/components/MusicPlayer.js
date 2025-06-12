import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css'; // Vamos criar este CSS

// Importe sua música aqui!
// Certifique-se de que o caminho e o nome do arquivo estejam corretos.
import MinhaMusica from '../audios/Zé Vaqueiro - COLADIN (Video Oficial).mp3'; // <--- AJUSTE O NOME DO ARQUIVO E O CAMINHO SE NECESSÁRIO

function MusicPlayer() {
  const audioRef = useRef(null); // Ref para acessar o elemento <audio> diretamente
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Volume inicial (0.0 a 1.0)

  // Efeito para definir o volume inicial quando o componente é montado
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]); // Reage a mudanças no estado do volume

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Opcional: Se a música terminar, ela para de tocar
  const handleSongEnd = () => {
    setIsPlaying(false);
    // Opcional: Para fazer a música repetir automaticamente, descomente a linha abaixo:
    // audioRef.current.play();
    // setIsPlaying(true);
  };

  return (
    <div className="music-player-container">
      <audio
        ref={audioRef}
        src={MinhaMusica}
        onEnded={handleSongEnd}
        loop={true} // Define se a música vai repetir automaticamente
      ></audio>

      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? '⏸️ Pausar' : '▶️ Nossa Música'}
      </button>

      <div className="volume-control">
        <label htmlFor="volume">Volume:</label>
        <input
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;