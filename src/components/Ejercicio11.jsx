import React, { useState } from 'react';

export default function Ejercicio11() {
  const [precio, setPrecio] = useState('');
  const [numeroArticulos, setNumeroArticulos] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularFactura = (e) => {
    e.preventDefault();

    const p = parseFloat(precio) || 0;
    const n = parseInt(numeroArticulos) || 0;

    const precioventa = p * n;
    const iva = Number((precioventa * 0.15).toFixed(2));
    const preciobruto = Number((precioventa + iva).toFixed(2));
    
    // Condición estricta según el enunciado (> 50)
    const descuento = preciobruto > 50 ? Number((preciobruto * 0.05).toFixed(2)) : 0;
    const totalpagar = Number((preciobruto - descuento).toFixed(2));

    setResultado({
      precioventa,
      iva,
      preciobruto,
      descuento,
      totalpagar,
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#1e293b' }}>
        Ejercicio 11: Factura de Artículo
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>
        Cálculo con IVA del 15% y 5% de descuento si el precio bruto es mayor a 50.
      </p>

      <form onSubmit={calcularFactura} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Precio del artículo:
          </label>
          <input
            type="number"
            step="any"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Ej. 25.50"
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Número de artículos:
          </label>
          <input
            type="number"
            value={numeroArticulos}
            onChange={(e) => setNumeroArticulos(e.target.value)}
            placeholder="Ej. 2"
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#2563eb',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '14px',
            cursor: 'pointer',
            marginTop: '5px'
          }}
        >
          Calculadora de Factura
        </button>
      </form>

      {resultado && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '6px', marginBottom: '10px', color: '#1e293b' }}>
            Datos de la factura
          </h3>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '6px 0' }}>
            <span>Precio de venta:</span> <strong>${resultado.precioventa.toFixed(2)}</strong>
          </p>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '6px 0' }}>
            <span>IVA (15%):</span> <strong>${resultado.iva.toFixed(2)}</strong>
          </p>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '6px 0' }}>
            <span>Precio bruto:</span> <strong>${resultado.preciobruto.toFixed(2)}</strong>
          </p>
          <p style={{ display: 'flex', justifyContent: 'space-between', margin: '6px 0', color: '#16a34a' }}>
            <span>Descuento (5%):</span> <strong>-${resultado.descuento.toFixed(2)}</strong>
          </p>
          <div style={{ borderTop: '1px solid #cbd5e1', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '15px', color: '#0f172a' }}>
            <span>Total a pagar:</span> <span>${resultado.totalpagar.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}