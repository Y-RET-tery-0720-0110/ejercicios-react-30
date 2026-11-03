import React, { useState } from 'react';

export default function Ejercicio28() {
  const [numeroInput, setNumeroInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularSuma = (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    const n = parseInt(numeroInput);

    if (isNaN(n)) {
      setError('Por favor, ingrese un número entero válido.');
      return;
    }

    if (n < 8) {
      setError('Error: El número ingresado es menor a 8.');
      return;
    }

    let suma = 0;
    for (let x = 8; x <= n; x++) {
      suma += x;
    }

    setResultado({
      numero: n,
      suma
    });
  };

  return (
    <div style={{ 
      maxWidth: '500px', 
      background: '#fff', 
      padding: '30px', 
      borderRadius: '8px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '6px', color: '#1e293b', marginTop: 0 }}>
        Ejercicio 28: Suma de Serie desde 8 hasta N
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula la suma de los números enteros desde el 8 hasta un número N ingresado (S = 8 + 9 + 10 + ... + N).
      </p>

      <form onSubmit={calcularSuma} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese el número enésimo (N &ge; 8):
          </label>
          <input
            type="number"
            value={numeroInput}
            onChange={(e) => setNumeroInput(e.target.value)}
            placeholder="Ej. 12"
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#2563eb',
            color: '#fff',
            padding: '11px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            marginTop: '5px'
          }}
        >
          Calcular Suma
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {resultado && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '10px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultado:
          </h3>
          <p style={{ margin: '6px 0', fontSize: '15px', color: '#2563eb' }}>
            La suma de la serie desde 8 hasta <strong>{resultado.numero}</strong> es: <strong>{resultado.suma}</strong>
          </p>
        </div>
      )}
    </div>
  );
}