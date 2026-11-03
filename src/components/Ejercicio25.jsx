import React, { useState } from 'react';

export default function Ejercicio25() {
  const [catetoA, setCatetoA] = useState('');
  const [catetoB, setCatetoB] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularHipotenusa = (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    const a = parseFloat(catetoA);
    const b = parseFloat(catetoB);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      setError('Por favor, ingrese valores numéricos mayores a 0 para ambos catetos.');
      return;
    }

    // Aplicando el Teorema de Pitágoras: hipotenusa = sqrt(a^2 + b^2)
    const hipotenusaBruta = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    const hipotenusa = Math.round(hipotenusaBruta * 100) / 100;

    setResultado({
      catetoA: a,
      catetoB: b,
      hipotenusa
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
        Ejercicio 25: Teorema de Pitágoras
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula el valor de la hipotenusa de un triángulo rectángulo ingresando las longitudes de sus catetos.
      </p>

      <form onSubmit={calcularHipotenusa} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese primer cateto:
          </label>
          <input
            type="number"
            step="any"
            value={catetoA}
            onChange={(e) => setCatetoA(e.target.value)}
            placeholder="Ej. 3"
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese segundo cateto:
          </label>
          <input
            type="number"
            step="any"
            value={catetoB}
            onChange={(e) => setCatetoB(e.target.value)}
            placeholder="Ej. 4"
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
          Calcular Hipotenusa
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
          <p style={{ margin: '5px 0' }}>Cateto A: <strong>{resultado.catetoA}</strong> | Cateto B: <strong>{resultado.catetoB}</strong></p>
          <p style={{ margin: '5px 0', fontSize: '15px', color: '#2563eb' }}>
            La hipotenusa es: <strong>{resultado.hipotenusa}</strong>
          </p>
        </div>
      )}
    </div>
  );
}