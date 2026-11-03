import React, { useState } from 'react';

export default function Ejercicio01() {
  const [horasTrabajadas, setHorasTrabajadas] = useState('');
  const [tarifaHora, setTarifaHora] = useState('');
  const [resultado, setResultado] = useState(null);

  const manejarCalculo = () => {
    const horas = horasTrabajadas === '' ? 0 : parseFloat(horasTrabajadas);
    const tarifa = tarifaHora === '' ? 0 : parseFloat(tarifaHora);

    let sueldoBase = 0;
    let pagoHorasExtras = 0;
    let horasExtras = 0;

    if (horas > 40) {
      horasExtras = horas - 40;
      sueldoBase = 40 * tarifa;
      pagoHorasExtras = horasExtras * (tarifa * 1.5);
    } else {
      sueldoBase = horas * tarifa;
    }

    const sueldoTotal = sueldoBase + pagoHorasExtras;

    // Forzamos un nuevo objeto cada vez para que React renderice el cambio al instante
    setResultado({
      sueldoBase,
      horasExtras,
      pagoHorasExtras,
      sueldoTotal,
      id: Date.now() 
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}>
      <h2>Ejercicio 01: Cálculo de Salario con Horas Extras</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Horas trabajadas en la semana:</label>
          <input 
            type="number" 
            value={horasTrabajadas} 
            onChange={(e) => setHorasTrabajadas(e.target.value)}
            placeholder="Ej. 45"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Tarifa por hora:</label>
          <input 
            type="number" 
            value={tarifaHora} 
            onChange={(e) => setTarifaHora(e.target.value)}
            placeholder="Ej. 150"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="button" 
          onClick={manejarCalculo}
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

      {resultado && (
        <div style={{ marginTop: '25px', padding: '15px', backgroundColor: '#f3f4f6', borderRadius: '5px' }}>
          <h3>Resultado:</h3>
          <p>Sueldo Base: ${resultado.sueldoBase.toFixed(2)}</p>
          <p>Horas Extras Trabajadas: {resultado.horasExtras}</p>
          <p>Pago por Horas Extras: ${resultado.pagoHorasExtras.toFixed(2)}</p>
          <hr style={{ margin: '10px 0' }} />
          <h4>Sueldo Total a Pagar: ${resultado.sueldoTotal.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
}