import React, { useState } from 'react';

export default function Ejercicio07() {
  const [numTrabajadores, setNumTrabajadores] = useState('');
  const [horas, setHoras] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [actual, setActual] = useState(1);
  const [suma, setSuma] = useState(0);
  const [registros, setRegistros] = useState([]);
  const [etapa, setEtapa] = useState('inicio'); // 'inicio', 'captura', 'fin'
  const [error, setError] = useState('');

  const iniciar = (e) => {
    e.preventDefault();
    setError('');
    const n = parseInt(numTrabajadores, 10);
    if (isNaN(n) || n <= 0) {
      setError('Por favor, ingrese un número válido mayor a 0.');
      return;
    }
    setEtapa('captura');
    setActual(1);
    setSuma(0);
    setRegistros([]);
    setHoras('');
    setTarifa('');
  };

  const registrarTrabajador = (e) => {
    e.preventDefault();
    setError('');
    const h = parseFloat(horas);
    const t = parseFloat(tarifa);

    if (isNaN(h) || isNaN(t) || h < 0 || t < 0) {
      setError('Ingrese valores numéricos válidos para horas y tarifa.');
      return;
    }

    let sueldoBase = h > 40 ? 40 * t : h * t;
    let extra = h > 40 ? (h - 40) * (t * 1.5) : 0;
    let salario = sueldoBase + extra;

    const nuevaSuma = suma + salario;
    const nuevosRegistros = [...registros, { id: actual, salario }];
    
    setSuma(nuevaSuma);
    setRegistros(nuevosRegistros);

    const total = parseInt(numTrabajadores, 10);
    if (actual < total) {
      setActual(actual + 1);
      setHoras('');
      setTarifa('');
    } else {
      setEtapa('fin');
    }
  };

  const reiniciar = () => {
    setNumTrabajadores('');
    setHoras('');
    setTarifa('');
    setActual(1);
    setSuma(0);
    setRegistros([]);
    setEtapa('inicio');
    setError('');
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Ejercicio 07: Suma de Salarios de N Trabajadores</h2>

      {etapa === 'inicio' && (
        <form onSubmit={iniciar} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese la cantidad de trabajadores:</label>
            <input 
              type="number" 
              value={numTrabajadores} 
              onChange={(e) => setNumTrabajadores(e.target.value)}
              placeholder="Ej. 3"
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <button 
            type="submit"
            style={{ padding: '12px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Comenzar
          </button>
        </form>
      )}

      {etapa === 'captura' && (
        <form onSubmit={registrarTrabajador} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '5px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Trabajador #{actual} de {numTrabajadores}</h3>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Horas trabajadas:</label>
            <input 
              type="number" 
              value={horas} 
              onChange={(e) => setHoras(e.target.value)}
              placeholder="Ej. 45"
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Tarifa por hora:</label>
            <input 
              type="number" 
              value={tarifa} 
              onChange={(e) => setTarifa(e.target.value)}
              placeholder="Ej. 150"
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <button 
            type="submit"
            style={{ padding: '12px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Registrar Trabajador
          </button>
        </form>
      )}

      {etapa === 'fin' && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '5px' }}>
          <h3 style={{ marginTop: '0' }}>Resumen de Salarios</h3>
          {registros.map((r, i) => (
            <p key={i} style={{ margin: '5px 0' }}>Trabajador {r.id}: ${r.salario.toFixed(2)}</p>
          ))}
          <hr style={{ margin: '15px 0' }} />
          <h3 style={{ color: '#2563eb' }}>La suma de los salarios es: ${suma.toFixed(2)}</h3>
          <button 
            type="button" 
            onClick={reiniciar}
            style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#475569', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reiniciar
          </button>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '5px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}
    </div>
  );
}