import React, { useState } from 'react';

export default function Ejercicio21() {
  const [num1Input, setNum1Input] = useState('');
  const [num2Input, setNum2Input] = useState('');
  const [contador, setContador] = useState(1);
  const [historialResultados, setHistorialResultados] = useState([]);
  const [ultimoResultado, setUltimoResultado] = useState(null);
  const [error, setError] = useState('');

  const procesarOperaciones = (e) => {
    e.preventDefault();
    setError('');

    if (contador > 10) {
      return;
    }

    const n1 = parseFloat(num1Input);
    const n2 = parseFloat(num2Input);

    if (isNaN(n1) || isNaN(n2)) {
      setError('Por favor, ingrese números válidos en ambos campos.');
      return;
    }

    if (n2 === 0) {
      setError('La división entre cero no está permitida.');
      return;
    }

    const suma = n1 + n2;
    const resta = n1 - n2;
    const multiplicacion = n1 * n2;
    const division = Math.round((n1 / n2) * 100) / 100;

    const resActual = { proceso: contador, num1: n1, num2: n2, suma, resta, multiplicacion, division };
    
    setUltimoResultado(resActual);
    setHistorialResultados([...historialResultados, resActual]);
    setNum1Input('');
    setNum2Input('');

    if (contador < 10) {
      setContador(contador + 1);
    } else {
      setContador(11); // Indica que se completaron los 10 procesos
    }
  };

  const reiniciar = () => {
    setContador(1);
    setNum1Input('');
    setNum2Input('');
    setUltimoResultado(null);
    setHistorialResultados([]);
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
        Ejercicio 21: Operaciones Básicas (10 Procesos)
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula suma, resta, multiplicación y división. El ciclo termina automáticamente al completar 10 procesos.
      </p>

      {contador <= 10 ? (
        <form onSubmit={procesarOperaciones} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '14px', marginBottom: '4px' }}>
            PROCESO No {contador} de 10
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
              Ingrese primer número:
            </label>
            <input
              type="number"
              step="any"
              value={num1Input}
              onChange={(e) => setNum1Input(e.target.value)}
              placeholder="Ej. 10"
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
              Ingrese segundo número:
            </label>
            <input
              type="number"
              step="any"
              value={num2Input}
              onChange={(e) => setNum2Input(e.target.value)}
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
            Ejecutar Proceso {contador}
          </button>
        </form>
      ) : (
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>
          ¡Final! Se han completado los 10 procesos exitosamente.
        </div>
      )}

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {/* Mostrar resultado del proceso actual */}
      {ultimoResultado && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '10px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultados del Proceso #{ultimoResultado.proceso}:
          </h3>
          <p style={{ margin: '5px 0' }}>La suma es: <strong>{ultimoResultado.suma}</strong></p>
          <p style={{ margin: '5px 0' }}>La resta es: <strong>{ultimoResultado.resta}</strong></p>
          <p style={{ margin: '5px 0' }}>La multiplicación es: <strong>{ultimoResultado.multiplicacion}</strong></p>
          <p style={{ margin: '5px 0' }}>La división es: <strong>{ultimoResultado.division}</strong></p>
        </div>
      )}

      {historialResultados.length > 0 && (
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
          Reiniciar Ciclo
        </button>
      )}
    </div>
  );
}