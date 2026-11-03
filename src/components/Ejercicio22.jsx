import React, { useState } from 'react';

export default function Ejercicio22() {
  const [numeroInput, setNumeroInput] = useState('');
  const [contador, setContador] = useState(1);
  const [ultimoResultado, setUltimoResultado] = useState(null);
  const [activo, setActivo] = useState(true);
  const [error, setError] = useState('');

  const procesarNumero = (e) => {
    e.preventDefault();
    setError('');

    if (!activo) return;

    const numero = parseFloat(numeroInput);
    if (isNaN(numero)) {
      setError('Por favor, ingrese un número válido.');
      return;
    }

    if (numero === 0) {
      setActivo(false);
      setUltimoResultado({ numero: 0, finalizado: true });
      setNumeroInput('');
      return;
    }

    const cubo = Math.pow(numero, 3);
    const raizcuadrada = Math.round(Math.sqrt(numero) * 100) / 100;

    const resActual = { proceso: contador, numero, cubo, raizcuadrada, finalizado: false };
    setUltimoResultado(resActual);
    setContador(contador + 1);
    setNumeroInput('');
  };

  const reiniciar = () => {
    setContador(1);
    setNumeroInput('');
    setUltimoResultado(null);
    setActivo(true);
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
        Ejercicio 22: Cubo y Raíz Cuadrada (Repetitivo)
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula el cubo y la raíz cuadrada de un número de forma repetitiva. Ingresa <strong>0</strong> para finalizar el proceso.
      </p>

      {activo ? (
        <form onSubmit={procesarNumero} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '14px', marginBottom: '4px' }}>
            PROCESO No {contador}
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
              Ingrese un número (0 para salir):
            </label>
            <input
              type="number"
              step="any"
              value={numeroInput}
              onChange={(e) => setNumeroInput(e.target.value)}
              placeholder="Ej. 9 o 0 para finalizar"
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
            Calcular
          </button>
        </form>
      ) : (
        <div style={{ padding: '15px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>
          FINAL DEL PROCESO (Se ingresó el valor 0).
        </div>
      )}

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {/* Mostrar resultado del proceso actual */}
      {ultimoResultado && !ultimoResultado.finalizado && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '10px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultados (Proceso #{ultimoResultado.proceso}):
          </h3>
          <p style={{ margin: '6px 0' }}>Número ingresado: <strong>{ultimoResultado.numero}</strong></p>
          <p style={{ margin: '6px 0' }}>El cubo es: <strong>{ultimoResultado.cubo.toLocaleString()}</strong></p>
          <p style={{ margin: '6px 0' }}>La raíz cuadrada es: <strong>{ultimoResultado.raizcuadrada}</strong></p>
        </div>
      )}

      {!activo && (
        <button
          type="button"
          onClick={reiniciar}
          style={{
            marginTop: '15px',
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#fff',
            padding: '10px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Reiniciar Ciclo
        </button>
      )}
    </div>
  );
}