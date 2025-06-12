// src/components/MessageSection.js
import React, { useState, useEffect } from 'react';
import './MessageSection.css';

function MessageSection() {
  const fullMessage = "Amor, sei que nem sempre estamos juntos fisicamente, mas sempre estaremos no pensamento um do outro. Eu te amo tanto, minha vida, e batalho todos os dias para que essa distância seja superada.Sei que não sou de escrever muito, mas encontrei uma forma de expressar pelo menos 1% do que sinto por você. Espero que essa data se repita muitas e muitas vezes, até que não exista mais distância entre nós. EU TE AMAREI POR TODAS AS MINHAS VIDAS ";
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullMessage.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedMessage((prev) => prev + fullMessage[index]);
        setIndex((prev) => prev + 1);
      }, 70); 
      return () => clearTimeout(timeoutId);
    }
  }, [index, fullMessage]);

  return (
    <section className="message-section">
      <h2 className="message-title">Uma Mensagem do Coração</h2>
      <p className="typed-message">{displayedMessage}</p>
    </section>
  );
}

export default MessageSection;