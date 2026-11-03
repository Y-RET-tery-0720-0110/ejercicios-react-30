import React, { useState } from 'react';

export default function Ejercicio06() {
  const [numeroInput, setNumeroInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularSuma = () => {
    setError('');
    const numero = numeroInput === '' ? NaN : parseInt(numeroInput, 10);

    if (isNaN(numero)) {
      setError('Por favor, ingrese un valor numérico válido.');
      setResultado(null);
      return;
    }

    if (numero <= 0) {
      setError('Error: El número N debe ser mayor a cero.');
      setResultado(null);
      return;
    }

    let suma = 0;
    const pasos = [];
    for (let x = 1; x <= numero; x++) {
      suma += x;
      pasos.push(`n${x}: ${x}`);
    }

    setResultado({
      numero,
      suma,
      pasos
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}>
      <h2>Ejercicio 06: Suma de los N Primeros Números Naturales</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese el número N:</label>
          <input 
            type="number" 
            value={numeroInput} 
            onChange={(e) => setNumeroInput(e.target.value)}
            placeholder="Ej. 5"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="button" 
          onClick={calcularSuma}
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
          Calcular Suma
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
          <div style={{ maxHeight: '150px', overflowY: 'auto', marginBottom: '10px', background: '#fff', padding: '10px', borderRadius: '4px' }}>
            {resultado.pasos.map((paso, idx) => (
              <p key={idx} style={{ margin: '2px 0', fontSize: '0.9rem' }}>{paso}</p>
            ))}
          </div>
          <hr style={{ margin: '10px 0' }} />
          <h4>La suma de la serie es: {resultado.suma}</h4>
        </div>
      )}
    </div>
  );
}