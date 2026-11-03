import React, { useState } from 'react';

export default function Ejercicio20() {
  const [coefA, setCoefA] = useState('');
  const [coefB, setCoefB] = useState('');
  const [coefC, setCoefC] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularEcuacion = (e) => {
    e.preventDefault();
    setError('');
    setResultado(null);

    const a = parseFloat(coefA);
    const b = parseFloat(coefB);
    const c = parseFloat(coefC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setError('Por favor, ingrese valores numéricos válidos para todos los coeficientes.');
      return;
    }

    if (a === 0) {
      setError("Esta no es una ecuación cuadrática, el coeficiente 'a' debe ser diferente de 0.");
      return;
    }

    const disc = Math.pow(b, 2) - 4 * a * c;

    if (disc > 0) {
      const s1 = Math.round((-b + Math.pow(disc, 0.5)) / (2 * a) * 100) / 100;
      const s2 = Math.round((-b - Math.pow(disc, 0.5)) / (2 * a) * 100) / 100;
      setResultado({
        tipo: 'real_dos',
        mensaje: `El discriminante es positivo y se han obtenido las siguientes soluciones: x1 = ${s1} y x2 = ${s2}`
      });
    } else if (disc === 0) {
      const s3 = Math.round((-b / (2 * a)) * 100) / 100;
      setResultado({
        tipo: 'real_uno',
        mensaje: `El discriminante es 0, se obtiene la siguiente solución única: s = ${s3}`
      });
    } else if ((4 * a * c) > Math.pow(b, 2)) {
      const raiz1 = Math.round((-b / (2 * a)) * 1000) / 1000;
      const raizima1 = Math.round((Math.sqrt((4 * a * c) - Math.pow(b, 2)) / (2 * a)) * 10000) / 10000;
      const raiz2 = Math.round((-b / (2 * a)) * 1000) / 1000;
      const raizima2 = Math.round((-Math.sqrt((4 * a * c) - Math.pow(b, 2)) / (2 * a)) * 10000) / 10000;

      setResultado({
        tipo: 'imaginaria',
        mensaje: `El discriminante es ${disc}. Se obtienen las siguientes raíces imaginarias: x1 = ${raiz1} + i(${raizima1}), x2 = ${raiz2} + i(${raizima2})`
      });
    } else {
      // Caso general de discriminante negativo donde aplica la fórmula estándar de complejos
      const real = Math.round((-b / (2 * a)) * 1000) / 1000;
      const imaginario = Math.round((Math.sqrt(-disc) / (2 * a)) * 10000) / 10000;
      setResultado({
        tipo: 'imaginaria',
        mensaje: `El discriminante es ${disc}. Se obtienen las siguientes raíces imaginarias: x1 = ${real} + i(${imaginario}), x2 = ${real} - i(${Math.abs(imaginario)})`
      });
    }
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
        Ejercicio 20: Ecuación Cuadrática
      </h2>
      <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px', lineHeight: '1.4' }}>
        Dada la ecuación $aX^2 + bX + c = 0$, ingrese los coeficientes para calcular sus soluciones (reales e imaginarias).
      </p>

      <form onSubmit={calcularEcuacion} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Coeficiente a:
          </label>
          <input
            type="number"
            step="any"
            value={coefA}
            onChange={(e) => setCoefA(e.target.value)}
            placeholder="Ej. 1"
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Coeficiente b:
          </label>
          <input
            type="number"
            step="any"
            value={coefB}
            onChange={(e) => setCoefB(e.target.value)}
            placeholder="Ej. -5"
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '5px', color: '#334155' }}>
            Coeficiente c:
          </label>
          <input
            type="number"
            step="any"
            value={coefC}
            onChange={(e) => setCoefC(e.target.value)}
            placeholder="Ej. 6"
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
          Calcular Soluciones
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {resultado && (
        <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '14px', color: '#334155' }}>
          <h3 style={{ fontWeight: 'bold', borderBottom: '1px solid #cbd5e1', paddingBottom: '8px', marginBottom: '10px', color: '#1e293b', fontSize: '15px', marginTop: 0 }}>
            Resultado:
          </h3>
          <p style={{ margin: '0', lineHeight: '1.5', color: '#2563eb', fontWeight: '600' }}>
            {resultado.mensaje}
          </p>
        </div>
      )}
    </div>
  );
}