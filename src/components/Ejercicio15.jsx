import React, { useState } from 'react';

export default function Ejercicio15() {
  const [resultado, setResultado] = useState(null);

  const calcularSumaYProducto = () => {
    let suma = 0;
    let producto = BigInt(1); // Usamos BigInt debido a que el producto de números pares del 20 al 400 da un número extremadamente grande

    for (let x = 20; x <= 400; x += 2) {
      suma += x;
      producto *= BigInt(x);
    }

    setResultado({
      suma,
      producto: producto.toString() // Convertimos a string para mostrarlo correctamente en pantalla
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
        Ejercicio 15: Suma y Producto de Pares
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Calcula y visualiza la suma y el producto de los números pares comprendidos entre 20 y 400 ambos inclusive.
      </p>

      <button
        type="button"
        onClick={calcularSumaYProducto}
        style={{
          width: '100%',
          backgroundColor: '#2563eb',
          color: '#fff',
          padding: '11px',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Calcular Suma y Producto
      </button>

      {resultado && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '12px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultado (Rango: pares del 20 al 400):
          </h3>
          <p style={{ margin: '8px 0' }}>La suma es: <strong>{resultado.suma.toLocaleString()}</strong></p>
          <p style={{ margin: '8px 0', wordBreak: 'break-all' }}>
            El producto es: <strong style={{ fontSize: '12px', color: '#2563eb' }}>{resultado.producto}</strong>
          </p>
        </div>
      )}
    </div>
  );
}