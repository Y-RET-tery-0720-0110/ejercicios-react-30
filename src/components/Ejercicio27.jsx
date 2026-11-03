import React, { useState } from 'react';

export default function Ejercicio27() {
  const [consumos, setConsumos] = useState([]);
  const [inputValor, setInputValor] = useState('');
  const [completado, setCompletado] = useState(false);

  const registrarConsumo = () => {
    if (completado) return;
    const val = parseFloat(inputValor);
    if (isNaN(val)) return;

    let descuento = val > 130 ? val * 0.15 : 0;
    let neto = val - descuento;
    
    const nuevos = [...consumos, neto];
    setConsumos(nuevos);
    setInputValor('');

    if (nuevos.length >= 130) {
      setCompletado(true);
    }
  };

  const simular130 = () => {
    let lista = [];
    for (let i = 0; i < 130; i++) {
      let val = Math.random() * 200 + 20; // Valores aleatorios entre 20 y 220
      let descuento = val > 130 ? val * 0.15 : 0;
      lista.push(val - descuento);
    }
    setConsumos(lista);
    setCompletado(true);
  };

  const total = consumos.reduce((acc, curr) => acc + curr, 0);

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
        Ejercicio 27: Consumos de Restaurante
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Procesa 130 consumos. Si el consumo excede los $130, se aplica un descuento del 15%.
      </p>

      {!completado ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '14px' }}>
              Consumo No {consumos.length + 1} de 130
            </span>
            <button
              type="button"
              onClick={simular130}
              style={{ backgroundColor: '#059669', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Simular 130 Rápido
            </button>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
              Ingrese consumo:
            </label>
            <input
              type="number"
              step="any"
              value={inputValor}
              onChange={(e) => setInputValor(e.target.value)}
              placeholder="Ej. 140"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <button
            type="button"
            onClick={registrarConsumo}
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
            Registrar Consumo
          </button>
        </div>
      ) : (
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>
          FIN DEL PROCESO (Se procesaron los 130 consumos).
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
        <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '10px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
          Resumen Actual:
        </h3>
        <p style={{ margin: '6px 0' }}>Consumos registrados: <strong>{consumos.length} / 130</strong></p>
        <p style={{ margin: '6px 0', fontSize: '16px', color: '#2563eb' }}>
          El total de los consumos es: <strong>${total.toFixed(2)}</strong>
        </p>
      </div>

      {consumos.length > 0 && (
        <button
          type="button"
          onClick={() => { setConsumos([]); setCompletado(false); }}
          style={{
            marginTop: '15px',
            width: '100%',
            backgroundColor: '#ef4444',
            color: '#fff',
            padding: '10px',
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