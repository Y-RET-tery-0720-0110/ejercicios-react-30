import React, { useState } from 'react';

export default function Ejercicio13() {
  const [numeroInput, setNumeroInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularFactorial = (e) => {
    e.preventDefault();
    setError('');

    const numero = parseInt(numeroInput, 10);
    if (isNaN(numero) || numero < 0) {
      setError('Por favor, ingrese un número entero mayor o igual a 0.');
      setResultado(null);
      return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial = factorial * i;
    }

    setResultado({ numero, factorial });
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
        Ejercicio 13: Factorial de un Número
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula e imprime el factorial de un número ingresado.
      </p>

      <form onSubmit={calcularFactorial} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>
            Ingresar número:
          </label>
          <input
            type="number"
            value={numeroInput}
            onChange={(e) => setNumeroInput(e.target.value)}
            placeholder="Ej. 5"
            required
            style={{ 
              width: '100%', 
              padding: '10px 12px', 
              borderRadius: '6px', 
              border: '1px solid #cbd5e1', 
              fontSize: '14px', 
              boxSizing: 'border-box',
              outline: 'none'
            }}
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
            cursor: 'pointer'
          }}
        >
          Calcular Factorial
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {resultado && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '12px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultado:
          </h3>
          <p style={{ textAlign: 'center', fontSize: '16px', margin: '10px 0', fontWeight: 'bold', color: '#2563eb' }}>
            {resultado.numero}! = {resultado.factorial.toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
}