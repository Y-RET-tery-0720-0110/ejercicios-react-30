import React, { useState } from 'react';

export default function Ejercicio24() {
  const [ladoA, setLadoA] = useState('');
  const [ladoB, setLadoB] = useState('');
  const [ladoC, setLadoC] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularArea = (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    const a = parseFloat(ladoA);
    const b = parseFloat(ladoB);
    const c = parseFloat(ladoC);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
      setError('Por favor, ingrese valores numéricos mayores a 0 para todos los lados.');
      return;
    }

    // Validar desigualdad triangular (la suma de dos lados debe ser mayor que el tercero)
    if (a + b <= c || a + c <= b || b + c <= a) {
      setError('Los lados ingresados no forman un triángulo válido (la suma de dos lados debe ser mayor al tercero).');
      return;
    }

    const sm = (a + b + c) / 2;
    // Fórmula de Herón corregida: sqrt(sm * (sm - a) * (sm - b) * (sm - c))
    const areaBruta = Math.sqrt(sm * (sm - a) * (sm - b) * (sm - c));
    const areatriangulo = Math.round(areaBruta * 100) / 100;

    setResultado({
      sm,
      areatriangulo
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
        Ejercicio 24: Área de un Triángulo
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula el área de un triángulo cualquiera ingresando las longitudes de sus tres lados (Fórmula de Herón).
      </p>

      <form onSubmit={calcularArea} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese lado A:
          </label>
          <input
            type="number"
            step="any"
            value={ladoA}
            onChange={(e) => setLadoA(e.target.value)}
            placeholder="Ej. 5"
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese lado B:
          </label>
          <input
            type="number"
            step="any"
            value={ladoB}
            onChange={(e) => setLadoB(e.target.value)}
            placeholder="Ej. 6"
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese lado C:
          </label>
          <input
            type="number"
            step="any"
            value={ladoC}
            onChange={(e) => setLadoC(e.target.value)}
            placeholder="Ej. 7"
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
          Calcular Área
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
          <p style={{ margin: '5px 0' }}>Semiperímetro (sm): <strong>{resultado.sm}</strong></p>
          <p style={{ margin: '5px 0', fontSize: '15px', color: '#2563eb' }}>
            El área del triángulo es: <strong>{resultado.areatriangulo}</strong>
          </p>
        </div>
      )}
    </div>
  );
}