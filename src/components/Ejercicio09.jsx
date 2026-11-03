import React, { useState } from 'react';

export default function Ejercicio09() {
  const [notaInput, setNotaInput] = useState('');
  const [notasLista, setNotasLista] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const agregarNota = (e) => {
    e.preventDefault();
    setError('');
    const nota = notaInput === '' ? NaN : parseFloat(notaInput);

    if (isNaN(nota)) {
      setError('Por favor, ingrese un valor numérico válido.');
      return;
    }

    if (nota < 0 || nota > 20) {
      setError('Error: La nota debe estar en un rango de 0 a 20.');
      return;
    }

    setNotasLista([...notasLista, nota]);
    setNotaInput('');
    setResultado(null); // Limpiamos el resultado anterior hasta calcular
  };

  const eliminarNota = (index) => {
    const nuevaLista = notasLista.filter((_, i) => i !== index);
    setNotasLista(nuevaLista);
    setResultado(null);
  };

  const calcularEstadisticas = () => {
    setError('');
    if (notasLista.length === 0) {
      setError('Debe ingresar al menos una nota para calcular.');
      return;
    }

    let ca = 0; // aprobadas
    let cd = 0; // desaprobadas
    let acumuladasApro = 0;
    let acumuladasDesapro = 0;
    let acumuladasTotal = 0;

    notasLista.forEach((nota) => {
      acumuladasTotal += nota;
      if (nota <= 10.5) {
        cd += 1;
        acumuladasDesapro += nota;
      } else {
        ca += 1;
        acumuladasApro += nota;
      }
    });

    const x = notasLista.length;
    const promedioGeneral = acumuladasTotal / x;
    const promedioAprobadas = ca > 0 ? acumuladasApro / ca : 0;
    const promedioDesaprobadas = cd > 0 ? acumuladasDesapro / cd : 0;

    setResultado({
      desaprobadas: cd,
      aprobadas: ca,
      promedioGeneral: promedioGeneral.toFixed(1),
      promedioAprobadas: promedioAprobadas.toFixed(1),
      promedioDesaprobadas: promedioDesaprobadas.toFixed(1)
    });
  };

  const reiniciar = () => {
    setNotasLista([]);
    setNotaInput('');
    setResultado(null);
    setError('');
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Ejercicio 09: Estadísticas de Notas</h2>
      
      <form onSubmit={agregarNota} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Introduce la nota (0 - 20):</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="number" 
              step="0.1"
              value={notaInput} 
              onChange={(e) => setNotaInput(e.target.value)}
              placeholder="Ej. 14.5"
              style={{ flex: 1, padding: '10px', boxSizing: 'border-box' }}
            />
            <button 
              type="submit"
              style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Agregar
            </button>
          </div>
        </div>
      </form>

      {notasLista.length > 0 && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '5px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Notas Ingresadas ({notasLista.length}):</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxHeight: '100px', overflowY: 'auto' }}>
            {notasLista.map((n, idx) => (
              <span key={idx} style={{ backgroundColor: '#e2e8f0', padding: '4px 8px', borderRadius: '4px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                {n}
                <button type="button" onClick={() => eliminarNota(idx)} style={{ background: 'none', border: 'none', color: '#b91c1c', cursor: 'pointer', fontWeight: 'bold' }}>×</button>
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <button 
              type="button" 
              onClick={calcularEstadisticas}
              style={{ flex: 1, padding: '10px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Calcular Resultados
            </button>
            <button 
              type="button" 
              onClick={reiniciar}
              style={{ padding: '10px 15px', backgroundColor: '#475569', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Limpiar
            </button>
          </div>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '5px', fontWeight: 'bold' }}>
          {error}
        </div>
      )}

      {resultado && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '5px' }}>
          <h3 style={{ marginTop: '0' }}>Resultados del Estudiante:</h3>
          <p>Cantidad de notas desaprobadas (≤ 10.5): <strong>{resultado.desaprobadas}</strong></p>
          <p>Cantidad de notas aprobadas (&gt; 10.5): <strong>{resultado.aprobadas}</strong></p>
          <p>Promedio de las notas aprobadas: <strong>{resultado.promedioAprobadas}</strong></p>
          <p>Promedio de las notas desaprobadas: <strong>{resultado.promedioDesaprobadas}</strong></p>
          <hr style={{ margin: '10px 0' }} />
          <h4>El promedio final es: {resultado.promedioGeneral}</h4>
        </div>
      )}
    </div>
  );
}