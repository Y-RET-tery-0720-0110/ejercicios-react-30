import React, { useState } from 'react';

export default function Ejercicio02() {
  const [sueldoInput, setSueldoInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularDescuento = () => {
    setError('');
    const sueldo = sueldoInput === '' ? NaN : parseFloat(sueldoInput);

    if (isNaN(sueldo)) {
      setError('Por favor, ingrese un valor numérico válido.');
      setResultado(null);
      return;
    }

    if (sueldo < 0) {
      setError('Error: El sueldo no puede ser negativo.');
      setResultado(null);
      return;
    }

    let descuento = 0;

    if (sueldo <= 1000) {
      descuento = sueldo * 0.10;
    } else if (sueldo <= 2000) {
      descuento = (1000 * 0.10) + ((sueldo - 1000) * 0.05);
    } else {
      descuento = (1000 * 0.10) + (1000 * 0.05) + ((sueldo - 2000) * 0.03);
    }

    const sueldoNeto = sueldo - descuento;

    setResultado({
      sueldo,
      descuento,
      sueldoNeto
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Ejercicio 02: Cálculo de Descuento y Sueldo Neto</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese el sueldo:</label>
          <input 
            type="number" 
            value={sueldoInput} 
            onChange={(e) => setSueldoInput(e.target.value)}
            placeholder="Ej. 1500"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="button" 
          onClick={calcularDescuento}
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
          <p>Sueldo Ingresado: ${resultado.sueldo.toFixed(2)}</p>
          <p>Descuento Total: ${resultado.descuento.toFixed(2)}</p>
          <hr style={{ margin: '10px 0' }} />
          <h4>Sueldo Neto a Recibir: ${resultado.sueldoNeto.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
}