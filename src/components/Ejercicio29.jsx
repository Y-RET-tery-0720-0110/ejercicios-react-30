import React, { useState } from 'react';

export default function Ejercicio29() {
  const [cajaInicial] = useState(3.71);
  const [egresosLista, setEgresosLista] = useState([]);
  const [inputEgreso, setInputEgreso] = useState('');
  const [finalizado, setFinalizado] = useState(false);
  const [error, setError] = useState('');

  const registrarEgreso = () => {
    setError('');
    const val = parseFloat(inputEgreso);

    if (isNaN(val)) {
      setError('Por favor, ingrese un valor numérico válido.');
      return;
    }

    // Si ingresa -1, el proceso termina (tal como tu ciclo do-while con egreso != -1)
    if (val === -1) {
      setFinalizado(true);
      setInputEgreso('');
      return;
    }

    if (val < 0) {
      setError('El egreso no puede ser negativo (excepto -1 para terminar).');
      return;
    }

    setEgresosLista([...egresosLista, val]);
    setInputEgreso('');
  };

  // Cálculo siguiendo la lógica de tu código en C#
  const sumaEgresosReales = egresosLista.reduce((acc, curr) => acc + curr, 0);
  // Como en tu código al salir sumas/restas el ajuste del -1 centinela:
  const totalEgresos = sumaEgresosReales + 1;
  const restoCaja = cajaInicial - totalEgresos;

  const reiniciar = () => {
    setEgresosLista([]);
    setInputEgreso('');
    setFinalizado(false);
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
        Ejercicio 29: Caja y Egresos (Compañía Barner)
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Caja inicial: ${cajaInicial.toFixed(2)}. Registra egresos diarios. Ingresa <strong>-1</strong> para terminar el proceso.
      </p>

      {!finalizado ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '14px' }}>
              Ingrese {egresosLista.length + 1}º egreso:
            </span>
          </div>

          <div>
            <input
              type="number"
              step="any"
              value={inputEgreso}
              onChange={(e) => setInputEgreso(e.target.value)}
              placeholder="Ej. 0.50 (o -1 para salir)"
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
            />
          </div>

          <button
            type="button"
            onClick={registrarEgreso}
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
            Registrar Egreso
          </button>
        </div>
      ) : (
        <div style={{ padding: '15px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>
          PROCESO FINALIZADO (Se ingresó -1).
        </div>
      )}

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
        <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '10px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
          Resumen Actual:
        </h3>
        <p style={{ margin: '6px 0' }}>Egresos registrados: <strong>{egresosLista.length}</strong></p>
        <p style={{ margin: '6px 0', color: '#b91c1c' }}>
          El total de egresos es: <strong>${totalEgresos.toFixed(2)}</strong>
        </p>
        <p style={{ margin: '6px 0', fontSize: '16px', color: '#2563eb' }}>
          Lo sobrante en caja es: <strong>${restoCaja.toFixed(2)}</strong>
        </p>
      </div>

      {(egresosLista.length > 0 || finalizado) && (
        <button
          type="button"
          onClick={reiniciar}
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