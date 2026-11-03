import React, { useState } from 'react';

export default function Ejercicio05() {
  const [minutosInput, setMinutosInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularTiempo = () => {
    setError('');
    const tiempo = minutosInput === '' ? NaN : parseInt(minutosInput, 10);

    if (isNaN(tiempo)) {
      setError('Por favor, ingrese un valor numérico válido.');
      setResultado(null);
      return;
    }

    if (tiempo < 0) {
      setError('Error: El tiempo no puede ser negativo.');
      setResultado(null);
      return;
    }

    const dias = Math.floor(tiempo / 1440);
    const x = tiempo % 1440;
    const horas = Math.floor(x / 60);
    const minutosRestantes = x % 60;

    setResultado({
      tiempo,
      dias,
      horas,
      minutos: minutosRestantes
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}>
      <h2>Ejercicio 05: Conversión de Minutos a Días, Horas y Minutos</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese un tiempo en minutos:</label>
          <input 
            type="number" 
            value={minutosInput} 
            onChange={(e) => setMinutosInput(e.target.value)}
            placeholder="Ej. 3000"
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
          Calcular Equivalencia
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
          <p>Equivale a <strong>{resultado.dias}</strong> días, <strong>{resultado.horas}</strong> horas y <strong>{resultado.minutos}</strong> minutos.</p>
        </div>
      )}
    </div>
  );
}