import React, { useState } from 'react';

export default function Ejercicio10() {
  const [numeroInput, setNumeroInput] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const calcularSumaDigitos = () => {
    setError('');
    const inputStr = numeroInput.trim();

    if (inputStr === '' || isNaN(inputStr)) {
      setError('Por favor, ingrese un número entero válido.');
      setResultado(null);
      return;
    }

    let num = parseInt(inputStr, 10);
    const numeroOriginal = num;
    let suma = 0;
    const digitos = [];

    // Lógica adaptada del algoritmo original (soporta números negativos también)
    let tempNum = Math.abs(num);
    do {
      let residuo = tempNum % 10;
      digitos.push(residuo);
      suma += residuo;
      tempNum = Math.floor(tempNum / 10);
    } while (tempNum !== 0);

    setResultado({
      numero: numeroOriginal,
      suma,
      digitos: digitos.reverse() // Opcional: para mostrar el desglose en orden
    });
  };

  return (
    <div style={{ maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '6px', color: '#1e293b', marginTop: '0' }}></h2>
      <h2>Ejercicio 10: Suma de los Dígitos de un Número</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ingresar un número:</label>
          <input 
            type="number" 
            value={numeroInput} 
            onChange={(e) => setNumeroInput(e.target.value)}
            placeholder="Ej. 458"
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
        </div>

        <button 
          type="button" 
          onClick={calcularSumaDigitos}
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
          Calcular Suma de Dígitos
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
          <p>Número ingresado: <strong>{resultado.numero}</strong></p>
          <p>Desglose de dígitos: {resultado.digitos.join(' + ')}</p>
          <hr style={{ margin: '10px 0' }} />
          <h4>La suma de los dígitos es: {resultado.suma}</h4>
        </div>
      )}
    </div>
  );
}