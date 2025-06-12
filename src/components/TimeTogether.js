import React, { useState, useEffect } from 'react';
import './TimeTogether.css';

function TimeTogether() {
  // A data de início foi movida para dentro do useEffect para evitar re-renders desnecessários.
  // Você pode ajustar esta data (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo)
  // Mês 6 = Julho (0=Janeiro, 1=Fevereiro, ..., 11=Dezembro)
  const [timeElapsed, setTimeElapsed] = useState({});

  useEffect(() => {
    // Defina a data de início aqui dentro do useEffect
    const startDate = new Date(2022, 6, 15, 0, 0, 0); // Exemplo: 15 de Julho de 2022 às 00:00:00

    const interval = setInterval(() => {
      const now = new Date();
      const diffInMilliseconds = now - startDate;

      if (diffInMilliseconds < 0) {
        setTimeElapsed({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const totalSeconds = Math.floor(diffInMilliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Calcular Anos e Meses é uma aproximação para exibição
      const years = Math.floor(totalDays / 365.25);
      const remainingDaysAfterYears = totalDays % 365.25;

      const months = Math.floor(remainingDaysAfterYears / 30.44);
      const remainingDaysAfterMonths = Math.floor(remainingDaysAfterYears % 30.44);

      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTimeElapsed({
        years: years,
        months: months,
        days: remainingDaysAfterMonths,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        totalHours: totalHours,
      });
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []); // Array de dependências vazio, o efeito roda uma vez e limpa ao desmontar

  const formatNumber = (num) => String(num).padStart(2, '0'); // Garante 2 dígitos

  const numToWords = (num) => {
    const units = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const teens = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const tens = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const hundreds = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
    const thousands = ['', 'mil', 'milhões', 'bilhões'];

    if (num === 0) return units[0];

    let result = '';
    let numStr = String(num);
    let numLen = numStr.length;

    if (numLen > 9) return num; // Limite para evitar complexidade excessiva

    let parts = [];
    while (numStr.length > 0) {
        let chunk = numStr.slice(-3);
        parts.unshift(parseInt(chunk, 10));
        numStr = numStr.slice(0, -3);
    }

    function convertThreeDigits(n) {
        let str = '';
        let h = Math.floor(n / 100);
        let t = Math.floor((n % 100) / 10);
        let u = n % 10;

        if (h > 0) {
            str += hundreds[h];
            if (t > 0 || u > 0) str += ' e ';
            if (n === 100) str = 'cem'; // Exceção para cem
        }

        if (t === 1) {
            str += teens[u];
        } else {
            if (t > 1) {
                str += tens[t];
                if (u > 0) str += ' e ';
            }
            if (u > 0 && t !== 1) {
                str += units[u];
            }
        }
        return str;
    }

    for (let i = 0; i < parts.length; i++) {
        let chunk = parts[i];
        if (chunk === 0) continue;

        let convertedChunk = convertThreeDigits(chunk);
        let thousandIndex = parts.length - 1 - i;

        if (thousandIndex > 0) {
            if (chunk === 1 && thousandIndex === 1) {
                // Não adiciona "um" antes de mil, apenas "mil"
            } else {
                result += convertedChunk;
            }
            result += ' ' + thousands[thousandIndex];
            if (chunk > 1 && thousandIndex === 1) {
                // Não precisa de plural para 'mil'
            }
            if (i < parts.length - 1 && parts[i+1] !== 0) result += ' e ';
        } else {
            result += convertedChunk;
        }
    }
    // Pequeno ajuste para "mil" em vez de "um mil"
    if (result.startsWith('um mil')) {
        result = result.substring(3).trim();
    }
    return result.trim();
};


  return (
    <section className="time-together-section">
      <h2 className="time-together-title">Tempo Juntos</h2>
      {/* Ajuste esta data para o texto manualmente */}
      <p className="start-date-text">Começamos nossa jornada em 15 de Julho de 2022</p>

      <div className="countdown-grid">
        <div className="countdown-card">
          <span className="card-value">{formatNumber(timeElapsed.years || 0)}</span>
          <span className="card-label">ANOS</span>
        </div>
        <div className="countdown-card">
          <span className="card-value">{formatNumber(timeElapsed.months || 0)}</span>
          <span className="card-label">MESES</span>
        </div>
        <div className="countdown-card">
          <span className="card-value">{formatNumber(timeElapsed.days || 0)}</span>
          <span className="card-label">DIAS</span>
        </div>
        <div className="countdown-card">
          <span className="card-value">{formatNumber(timeElapsed.hours || 0)}</span>
          <span className="card-label">HORAS</span>
        </div>
        <div className="countdown-card">
          <span className="card-value">{formatNumber(timeElapsed.minutes || 0)}</span>
          <span className="card-label">MINUTOS</span>
        </div>
        <div className="countdown-card">
          <span className="card-value">{formatNumber(timeElapsed.seconds || 0)}</span>
          <span className="card-label">SEGUNDOS</span>
        </div>
      </div>

      {timeElapsed.totalHours !== undefined && (
        <div className="total-hours-info">
          <p className="total-hours-value">Um total de {timeElapsed.totalHours.toLocaleString('pt-BR')} horas</p>
          <p className="total-hours-words">{numToWords(timeElapsed.totalHours || 0)} horas</p>
        </div>
      )}
    </section>
  );
}

export default TimeTogether;