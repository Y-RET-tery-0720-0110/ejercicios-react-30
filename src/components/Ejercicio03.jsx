import React, { useState } from 'react';

export default function Ejercicio03() {
  const [montoInput, setMontoInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularDescuentoMonto = () => {
    setError('');
    const monto = montoInput === '' ? NaN : parseFloat(montoInput);

    if (isNaN(monto)) {
      setError('Por favor, ingrese un valor numérico válido.');
      setResultado(null);
      return;
    }

    if (monto < 0) {
      setError('Error: El monto no puede ser negativo.');
      setResultado(null);
      return;
    }

    let porcentaje = 0;
    let descuento = 0;

    if (monto > 100) {
      porcentaje = 10;
      descuento = monto * 0.10;
    } else {
      porcentaje = 2; // Nota: en tu código original tenías 0.2 que equivale al 20%, pero el texto dice 2%. Usamos 0.02 para el 2% correcto.
      descuento = monto * 0.02;
    }

    const montoFinal = monto - descuento;

    setResultado({
      monto,
      porcentaje,
      descuento,
      montoFinal
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Ejercicio 03: Cálculo de Descuento por Monto</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese el monto:</label>
          <input 
            type="number" 
            value={montoInput} 
            onChange={(e) => setMontoInput(e.target.value)}
            placeholder="Ej. 150"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="button" 
          onClick={calcularDescuentoMonto}
          style={{ 
            padding: '12px', 
            backgroundColor: '#2563eb', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer', 
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Calcular Descuento
        </button>
      </div>

      {error && (
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '5px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {resultado && (
        <div style={{ marginTop: '25px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '5px' }}>
          <h3>Resultado:</h3>
          <p>Monto Ingresado: ${resultado.monto.toFixed(2)}</p>
          <p>Descuento Aplicado ({resultado.porcentaje}%): ${resultado.descuento.toFixed(2)}</p>
          <hr style={{ margin: '10px 0' }} />
          <h4>Monto Final a Pagar: ${resultado.montoFinal.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
}