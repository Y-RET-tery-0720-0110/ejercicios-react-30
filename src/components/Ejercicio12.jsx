import React, { useState } from 'react';

export default function Ejercicio12() {
  const [numeroInput, setNumeroInput] = useState('');
  const [listaNumeros, setListaNumeros] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  // Agregar un número individualmente
  const agregarNumero = (e) => {
    e.preventDefault();
    setError('');

    if (listaNumeros.length >= 50) {
      setError('Ya se han ingresado los 50 números requeridos.');
      return;
    }

    const inputTrim = numeroInput.trim();
    if (inputTrim === '' || isNaN(inputTrim)) {
      setError('Por favor, ingrese un número entero válido.');
      return;
    }

    const num = parseInt(inputTrim, 10);
    const nuevaLista = [...listaNumeros, num];
    setListaNumeros(nuevaLista);
    setNumeroInput('');

    // Si al agregar este número se completan los 50, se procesa el resultado automáticamente
    if (nuevaLista.length === 50) {
      calcularEstadisticas(nuevaLista);
    }
  };

  // Función principal para procesar los conteos según la lógica del algoritmo
  const calcularEstadisticas = (numeros) => {
    let pares = 0;
    let impares = 0;
    let positivos = 0;
    let negativos = 0;

    numeros.forEach((num) => {
      // Determinar Par / Impar
      if (num % 2 === 0) {
        pares++;
      } else {
        impares++;
      }

      // Determinar Positivo / Negativo
      if (num > 0) {
        positivos++;
      } else if (num < 0) {
        negativos++;
      }
    });

    setResultado({ pares, impares, positivos, negativos, total: numeros.length });
  };

  // Función útil para generar o simular los 50 números de forma rápida durante las pruebas
  const generar50Aleatorios = () => {
    setError('');
    const aleatorios = Array.from({ length: 50 }, () => Math.floor(Math.random() * 201) - 100);
    setListaNumeros(aleatorios);
    calcularEstadisticas(aleatorios);
  };

  const reiniciar = () => {
    setListaNumeros([]);
    setResultado(null);
    setNumeroInput('');
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
        Ejercicio 12: Clasificación de 50 Números
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Determina e imprime cuántos números son pares, impares, positivos y negativos entre los 50 ingresados.
      </p>

      {/* Contador de progreso */}
      <div style={{ marginBottom: '15px', fontWeight: 'bold', color: '#334155', fontSize: '14px' }}>
        Números ingresados: <span style={{ color: '#2563eb' }}>{listaNumeros.length}</span> / 50
      </div>

      <form onSubmit={agregarNumero} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>
            Ingrese el número {listaNumeros.length < 50 ? listaNumeros.length + 1 : 50}:
          </label>
          <input
            type="number"
            value={numeroInput}
            onChange={(e) => setNumeroInput(e.target.value)}
            placeholder="Ej. -15 o 42"
            disabled={listaNumeros.length >= 50}
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

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="submit"
            disabled={listaNumeros.length >= 50}
            style={{
              flex: 1,
              backgroundColor: listaNumeros.length >= 50 ? '#94a3b8' : '#2563eb',
              color: '#fff',
              padding: '10px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: listaNumeros.length >= 50 ? 'not-allowed' : 'pointer'
            }}
          >
            Agregar Número
          </button>

          <button
            type="button"
            onClick={generar50Aleatorios}
            style={{
              backgroundColor: '#059669',
              color: '#fff',
              padding: '10px 14px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            Generar 50
          </button>
        </div>
      </form>

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {/* Resultados de los conteos */}
      {resultado && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '12px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultados del análisis ({resultado.total} números)
          </h3>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <span>Cantidad de números pares:</span> <strong>{resultado.pares}</strong>
          </p>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <span>Cantidad de números impares:</span> <strong>{resultado.impares}</strong>
          </p>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <span>Cantidad de números positivos:</span> <strong>{resultado.positivos}</strong>
          </p>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0' }}>
            <span>Cantidad de números negativos:</span> <strong>{resultado.negativos}</strong>
          </p>
        </div>
      )}

      {listaNumeros.length > 0 && (
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
          Reiniciar Conteo
        </button>
      )}
    </div>
  );
}