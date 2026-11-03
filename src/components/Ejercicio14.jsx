import React, { useState } from 'react';

export default function Ejercicio14() {
  const [numeroInput, setNumeroInput] = useState('');
  const [listaNumeros, setListaNumeros] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const agregarNumero = (e) => {
    e.preventDefault();
    setError('');

    if (listaNumeros.length >= 100) {
      setError('Ya se han ingresado los 100 números requeridos.');
      return;
    }

    const inputTrim = numeroInput.trim();
    if (inputTrim === '' || isNaN(inputTrim)) {
      setError('Por favor, ingrese un número válido.');
      return;
    }

    const num = parseFloat(inputTrim);
    const nuevaLista = [...listaNumeros, num];
    setListaNumeros(nuevaLista);
    setNumeroInput('');

    if (nuevaLista.length === 100) {
      calcularMedia(nuevaLista);
    }
  };

  const calcularMedia = (numeros) => {
    let suma = 0;
    numeros.forEach((num) => {
      suma += num;
    });
    const media = Math.round((suma / 100) * 100) / 100;
    setResultado({ media, suma });
  };

  const generar100Aleatorios = () => {
    setError('');
    const aleatorios = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200) - 100);
    setListaNumeros(aleatorios);
    calcularMedia(aleatorios);
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
        Ejercicio 14: Media de 100 Números
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula la media aritmética de 100 números ingresados e imprime el resultado.
      </p>

      <div style={{ marginBottom: '15px', fontWeight: 'bold', color: '#334155', fontSize: '14px' }}>
        Números ingresados: <span style={{ color: '#2563eb' }}>{listaNumeros.length}</span> / 100
      </div>

      <form onSubmit={agregarNumero} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>
            Ingrese el número {listaNumeros.length < 100 ? listaNumeros.length + 1 : 100}:
          </label>
          <input
            type="number"
            step="any"
            value={numeroInput}
            onChange={(e) => setNumeroInput(e.target.value)}
            placeholder="Ej. 25.5"
            disabled={listaNumeros.length >= 100}
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
            disabled={listaNumeros.length >= 100}
            style={{
              flex: 1,
              backgroundColor: listaNumeros.length >= 100 ? '#94a3b8' : '#2563eb',
              color: '#fff',
              padding: '10px',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: listaNumeros.length >= 100 ? 'not-allowed' : 'pointer'
            }}
          >
            Agregar Número
          </button>

          <button
            type="button"
            onClick={generar100Aleatorios}
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
            Generar 100
          </button>
        </div>
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
          <p style={{ margin: '6px 0' }}>Suma total acumulada: <strong>{resultado.suma.toFixed(2)}</strong></p>
          <p style={{ margin: '6px 0', fontSize: '15px', color: '#2563eb' }}>
            La media de los 100 números ingresados es: <strong>{resultado.media}</strong>
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