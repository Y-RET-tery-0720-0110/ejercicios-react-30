import React, { useState } from 'react';

export default function Ejercicio30() {
  const [nota1Input, setNota1Input] = useState('');
  const [nota2Input, setNota2Input] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularPromedio = (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    const n1 = parseFloat(nota1Input);
    const n2 = parseFloat(nota2Input);

    if (isNaN(n1) || isNaN(n2)) {
      setError('Por favor, ingrese valores numéricos válidos en ambas notas.');
      return;
    }

    // Validación de la escala vigesimal (0 - 20) tal como en tu código
    if (n1 >= 0 && n1 <= 20 && n2 >= 0 && n2 <= 20) {
      const promedio = (n1 + n2) / 2;
      let estado = '';

      if (promedio >= 10.5 && promedio <= 20) {
        estado = 'Aprobado';
      } else {
        estado = 'Desaprobado';
      }

      setResultado({
        promedio: promedio.toFixed(2),
        estado
      });
    } else {
      setError('ERROR... Las notas ingresadas no se encuentran en la escala vigesimal (0-20)');
    }
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
        Ejercicio 30: Promedio de Notas (Escala 0-20)
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Ingresa dos notas (de 0 a 20) para calcular su promedio y determinar si está aprobado (mínimo 10.5) o desaprobado.
      </p>

      <form onSubmit={calcularPromedio} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese primera nota:
          </label>
          <input
            type="number"
            step="any"
            value={nota1Input}
            onChange={(e) => setNota1Input(e.target.value)}
            placeholder="Ej. 14"
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Ingrese segunda nota:
          </label>
          <input
            type="number"
            step="any"
            value={nota2Input}
            onChange={(e) => setNota2Input(e.target.value)}
            placeholder="Ej. 08"
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
          Calcular Promedio
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
          <p style={{ margin: '6px 0', fontSize: '15px' }}>
            Promedio: <strong>{resultado.promedio}</strong>
          </p>
          <p style={{ margin: '6px 0', fontSize: '16px', fontWeight: 'bold', color: resultado.estado === 'Aprobado' ? '#166534' : '#b91c1c' }}>
            Estado: {resultado.estado}
          </p>
        </div>
      )}
    </div>
  );
}