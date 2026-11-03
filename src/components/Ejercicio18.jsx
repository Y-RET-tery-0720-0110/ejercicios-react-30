import React, { useState } from 'react';

export default function Ejercicio18() {
  const [caracterInput, setCaracterInput] = useState('');
  const [historial, setHistorial] = useState([]);
  const [vocalEncontrada, setVocalEncontrada] = useState(null);
  const [error, setError] = useState('');

  const procesarCaracter = (e) => {
    e.preventDefault();
    setError('');

    if (vocalEncontrada !== null) {
      return; // Ya se encontró la primera vocal, se detiene el flujo
    }

    const charStr = caracterInput.trim().toLowerCase();
    if (charStr === '' || charStr.length > 1) {
      setError('Por favor, ingrese un solo carácter válido.');
      return;
    }

    const nuevoHistorial = [...historial, charStr];
    setHistorial(nuevoHistorial);
    setCaracterInput('');

    // Comprobar si es vocal (a, e, i, o, u)
    if (['a', 'e', 'i', 'o', 'u'].includes(charStr)) {
      setVocalEncontrada(charStr);
    }
  };

  const reiniciar = () => {
    setCaracterInput('');
    setHistorial([]);
    setVocalEncontrada(null);
    setError('');
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
        Ejercicio 18: Primera Vocal Leída
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Lee caracteres uno a uno desde el teclado hasta detectar e imprimir la primera vocal ingresada.
      </p>

      <form onSubmit={procesarCaracter} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>
            {vocalEncontrada !== null ? '¡Proceso finalizado!' : 'Ingrese un carácter:'}
          </label>
          <input
            type="text"
            maxLength="1"
            value={caracterInput}
            onChange={(e) => setCaracterInput(e.target.value)}
            placeholder="Ej. x"
            disabled={vocalEncontrada !== null}
            style={{ 
              width: '100%', 
              padding: '10px 12px', 
              borderRadius: '6px', 
              border: '1px solid #cbd5e1', 
              fontSize: '14px', 
              boxSizing: 'border-box',
              outline: 'none',
              backgroundColor: vocalEncontrada !== null ? '#f1f5f9' : '#fff'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={vocalEncontrada !== null}
          style={{
            backgroundColor: vocalEncontrada !== null ? '#94a3b8' : '#2563eb',
            color: '#fff',
            padding: '11px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: vocalEncontrada !== null ? 'not-allowed' : 'pointer'
          }}
        >
          Enviar Carácter
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {/* Historial de intentos */}
      {historial.length > 0 && (
        <div style={{ marginTop: '15px', fontSize: '13px', color: '#64748b' }}>
          Caracteres ingresados: <strong>{historial.join(', ')}</strong>
        </div>
      )}

      {/* Resultado cuando encuentra la vocal */}
      {vocalEncontrada !== null && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '12px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultado:
          </h3>
          <p style={{ margin: '8px 0', fontSize: '15px', color: '#2563eb' }}>
            La primera vocal ingresada fue: <strong>{vocalEncontrada}</strong>
          </p>
        </div>
      )}

      {historial.length > 0 && (
        <button
          type="button"
          onClick={reiniciar}
          style={{
            marginTop: '15px',
            width: '100%',
            backgroundColor: '#ef4444',
            color: '#fff',
            padding: '9px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          Reiniciar Programa
        </button>
      )}
    </div>
  );
}