import React, { useState } from 'react';

export default function Ejercicio26() {
  const [radioInput, setRadioInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularGeometria = (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    const radio = parseFloat(radioInput);

    if (isNaN(radio) || radio <= 0) {
      setError('Por favor, ingrese un valor de radio mayor a 0.');
      return;
    }

    const pi = 3.14;
    const longitud = Math.round((2 * pi * radio) * 100) / 100;
    const area = Math.round((pi * Math.pow(radio, 2)) * 100) / 100;
    const volumen = Math.round(((4 / 3.0) * pi * Math.pow(radio, 3)) * 100) / 100;

    setResultado({
      radio,
      longitud,
      area,
      volumen
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
        Ejercicio 26: Circunferencia, Área y Volumen
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula la longitud de la circunferencia, el área del círculo y el volumen de la esfera a partir de un radio ingresado.
      </p>

      <form onSubmit={calcularGeometria} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese el radio:
          </label>
          <input
            type="number"
            step="any"
            value={radioInput}
            onChange={(e) => setRadioInput(e.target.value)}
            placeholder="Ej. 5"
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
          Calcular Cálculos
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
            Resultados (Radio = {resultado.radio}):
          </h3>
          <p style={{ margin: '6px 0' }}>Longitud de la circunferencia: <strong>{resultado.longitud}</strong></p>
          <p style={{ margin: '6px 0' }}>Área del círculo: <strong>{resultado.area}</strong></p>
          <p style={{ margin: '6px 0', fontSize: '15px', color: '#2563eb' }}>
            Volumen de la esfera: <strong>{resultado.volumen}</strong>
          </p>
        </div>
      )}
    </div>
  );
}