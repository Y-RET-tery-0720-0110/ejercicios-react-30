import React, { useState } from 'react';

export default function Ejercicio08() {
  const [horasInput, setHorasInput] = useState('');
  const [tarifaInput, setTarifaInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularSalario = () => {
    setError('');
    const horas = horasInput === '' ? NaN : parseFloat(horasInput);
    const tarifa = tarifaInput === '' ? NaN : parseFloat(tarifaInput);

    if (isNaN(horas) || isNaN(tarifa)) {
      setError('Por favor, ingrese valores numéricos válidos.');
      setResultado(null);
      return;
    }

    if (horas < 0 || tarifa < 0) {
      setError('Error: Las horas y la tarifa no pueden ser negativas.');
      setResultado(null);
      return;
    }

    const salario = horas * tarifa;

    setResultado({
      horas,
      tarifa,
      salario
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}>
      <h2>Ejercicio 08: Cálculo de Salario Simple</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese horas trabajadas:</label>
          <input 
            type="number" 
            value={horasInput} 
            onChange={(e) => setHorasInput(e.target.value)}
            placeholder="Ej. 40"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingrese tarifa:</label>
          <input 
            type="number" 
            value={tarifaInput} 
            onChange={(e) => setTarifaInput(e.target.value)}
            placeholder="Ej. 200"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="button" 
          onClick={calcularSalario}
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
          Calcular Salario
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
          <p>Horas trabajadas: {resultado.horas}</p>
          <p>Tarifa por hora: ${resultado.tarifa.toFixed(2)}</p>
          <hr style={{ margin: '10px 0' }} />
          <h4>El salario del trabajador es: ${resultado.salario.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
}