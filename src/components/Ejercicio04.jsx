import React, { useState } from 'react';

export default function Ejercicio04() {
  const [tiempoInput, setTiempoInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularTiempo = () => {
    setError('');
    const segundos = tiempoInput === '' ? NaN : parseInt(tiempoInput, 10);

    if (isNaN(segundos)) {
      setError('Por favor, ingrese un valor numérico válido.');
      setResultado(null);
      return;
    }

    if (segundos <= 0) {
      setError('Error: La cantidad de segundos debe ser un número positivo.');
      setResultado(null);
      return;
    }

    if (segundos < 60) {
      const segundosRestantes = 60 - segundos;
      setResultado({
        tipo: 'menor',
        segundosRestantes
      });
    } else {
      const minutos = Math.floor(segundos / 60);
      const segundosRestantes = segundos % 60;
      setResultado({
        tipo: 'mayor',
        minutos,
        segundosRestantes
      });
    }
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}>
      <h2>Ejercicio 04: Conversión de Segundos a Minutos</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese el tiempo en segundos:</label>
          <input 
            type="number" 
            value={tiempoInput} 
            onChange={(e) => setTiempoInput(e.target.value)}
            placeholder="Ej. 125"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="button" 
          onClick={calcularTiempo}
          style={{ 
            padding: '12px', 
            backgroundColor: '#2563eb', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer', 
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Calcular Tiempo
        </button>
      </div>

      {error && (
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '5px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {resultado && (
        <div style={{ marginTop: '25px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '5px' }}>
          <h3>Resultado:</h3>
          {resultado.tipo === 'menor' ? (
            <p>Le faltan <strong>{resultado.segundosRestantes}</strong> segundos para convertirse en minuto.</p>
          ) : (
            <p>Equivale a <strong>{resultado.minutos}</strong> minutos y tiene <strong>{resultado.segundosRestantes}</strong> segundos restantes.</p>
          )}
        </div>
      )}
    </div>
  );
}