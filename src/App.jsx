import React, { useState } from 'react';
import Ejercicio01 from './components/Ejercicio01';
import Ejercicio02 from './components/Ejercicio02';
import Ejercicio03 from './components/Ejercicio03';
import Ejercicio04 from './components/Ejercicio04';
import Ejercicio05 from './components/Ejercicio05';
import Ejercicio06 from './components/Ejercicio06';
import Ejercicio07 from './components/Ejercicio07';
import Ejercicio08 from './components/Ejercicio08';
import Ejercicio09 from './components/Ejercicio09';
import Ejercicio10 from './components/Ejercicio10';
import Ejercicio11 from './components/Ejercicio11';
import Ejercicio12 from './components/Ejercicio12';
import Ejercicio13 from './components/Ejercicio13';
import Ejercicio14 from './components/Ejercicio14';
import Ejercicio15 from './components/Ejercicio15';
import Ejercicio18 from './components/Ejercicio18';
import Ejercicio19 from './components/Ejercicio19';
import Ejercicio20 from './components/Ejercicio20';
import Ejercicio21 from './components/Ejercicio21';
import Ejercicio22 from './components/Ejercicio22';
import Ejercicio23 from './components/Ejercicio23';
import Ejercicio24 from './components/Ejercicio24';
import Ejercicio25 from './components/Ejercicio25';
import Ejercicio26 from './components/Ejercicio26';
import Ejercicio27 from './components/Ejercicio27';
import Ejercicio28 from './components/Ejercicio28';
import Ejercicio29 from './components/Ejercicio29';
import Ejercicio30 from './components/Ejercicio30';

export default function App() {
  const [ejercicioActivo, setEjercicioActivo] = useState(1);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Barra lateral de navegación (Portafolio) */}
      <div style={{ width: '260px', backgroundColor: '#1e293b', color: '#fff', padding: '20px', overflowY: 'auto', flexShrink: 0 }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 5px 0' }}>Portafolio</h2>
        <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px' }}>30 Ejercicios en React</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => setEjercicioActivo(1)} style={buttonStyle(ejercicioActivo === 1)}>Ejercicio 01: Salario</button>
          <button onClick={() => setEjercicioActivo(2)} style={buttonStyle(ejercicioActivo === 2)}>Ejercicio 02: Descuento Sueldo</button>
          <button onClick={() => setEjercicioActivo(3)} style={buttonStyle(ejercicioActivo === 3)}>Ejercicio 03: Descuento Monto</button>
          <button onClick={() => setEjercicioActivo(4)} style={buttonStyle(ejercicioActivo === 4)}>Ejercicio 04: Segundos</button>
          <button onClick={() => setEjercicioActivo(5)} style={buttonStyle(ejercicioActivo === 5)}>Ejercicio 05: Minutos a Días</button>
          <button onClick={() => setEjercicioActivo(6)} style={buttonStyle(ejercicioActivo === 6)}>Ejercicio 06: Suma Serie</button>
          <button onClick={() => setEjercicioActivo(7)} style={buttonStyle(ejercicioActivo === 7)}>Ejercicio 07: Suma Salarios</button>
          <button onClick={() => setEjercicioActivo(8)} style={buttonStyle(ejercicioActivo === 8)}>Ejercicio 08: Salario Simple</button>
          <button onClick={() => setEjercicioActivo(9)} style={buttonStyle(ejercicioActivo === 9)}>Ejercicio 09: Notas Estudiante</button>
          <button onClick={() => setEjercicioActivo(10)} style={buttonStyle(ejercicioActivo === 10)}>Ejercicio 10: Suma Dígitos</button>
          <button onClick={() => setEjercicioActivo(11)} style={buttonStyle(ejercicioActivo === 11)}>Ejercicio 11: Factura</button>
          <button onClick={() => setEjercicioActivo(12)} style={buttonStyle(ejercicioActivo === 12)}>Ejercicio 12: Clasificación de Números</button>
          <button onClick={() => setEjercicioActivo(13)} style={buttonStyle(ejercicioActivo === 13)}>Ejercicio 13: Factorial</button>
          <button onClick={() => setEjercicioActivo(14)} style={buttonStyle(ejercicioActivo === 14)}>Ejercicio 14: Media de Números</button>
          <button onClick={() => setEjercicioActivo(15)} style={buttonStyle(ejercicioActivo === 15)}>Ejercicio 15: Suma y Producto Pares</button>
          <button onClick={() => setEjercicioActivo(18)} style={buttonStyle(ejercicioActivo === 18)}>Ejercicio 18: Primera Vocal</button>
          <button onClick={() => setEjercicioActivo(19)} style={buttonStyle(ejercicioActivo === 19)}>Ejercicio 19: Parte Fraccionaria</button>
          <button onClick={() => setEjercicioActivo(20)} style={buttonStyle(ejercicioActivo === 20)}>Ejercicio 20: Ecuación Cuadrática</button>
          <button onClick={() => setEjercicioActivo(21)} style={buttonStyle(ejercicioActivo === 21)}>Ejercicio 21: Operaciones 10 Ciclos</button>
          <button onClick={() => setEjercicioActivo(22)} style={buttonStyle(ejercicioActivo === 22)}>Ejercicio 22: Cubo y Raíz</button>
          <button onClick={() => setEjercicioActivo(23)} style={buttonStyle(ejercicioActivo === 23)}>Ejercicio 23: Op. Repetitivas (Salir 0)</button>
          <button onClick={() => setEjercicioActivo(24)} style={buttonStyle(ejercicioActivo === 24)}>Ejercicio 24: Área de Triángulo</button>
          <button onClick={() => setEjercicioActivo(25)} style={buttonStyle(ejercicioActivo === 25)}>Ejercicio 25: Teorema de Pitágoras</button>
          <button onClick={() => setEjercicioActivo(26)} style={buttonStyle(ejercicioActivo === 26)}>Ejercicio 26: Círculo y Esfera</button>
          <button onClick={() => setEjercicioActivo(27)} style={buttonStyle(ejercicioActivo === 27)}>Ejercicio 27: Consumos Restaurante</button>
          <button onClick={() => setEjercicioActivo(28)} style={buttonStyle(ejercicioActivo === 28)}>Ejercicio 28: Suma Serie desde 8</button>
          <button onClick={() => setEjercicioActivo(29)} style={buttonStyle(ejercicioActivo === 29)}>Ejercicio 29: Caja y Egresos</button>
          <button onClick={() => setEjercicioActivo(30)} style={buttonStyle(ejercicioActivo === 30)}>Ejercicio 30: Promedio Notas</button>
        </div>
      </div>

      {/* Contenido Principal */}
      <div style={{ 
        flex: 1, 
        padding: '30px 40px', 
        overflowY: 'auto', 
        backgroundColor: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        {ejercicioActivo === 1 && <Ejercicio01 />}
        {ejercicioActivo === 2 && <Ejercicio02 />}
        {ejercicioActivo === 3 && <Ejercicio03 />}
        {ejercicioActivo === 4 && <Ejercicio04 />}
        {ejercicioActivo === 5 && <Ejercicio05 />}
        {ejercicioActivo === 6 && <Ejercicio06 />}
        {ejercicioActivo === 7 && <Ejercicio07 />}
        {ejercicioActivo === 8 && <Ejercicio08 />}
        {ejercicioActivo === 9 && <Ejercicio09 />}
        {ejercicioActivo === 10 && <Ejercicio10 />}
        {ejercicioActivo === 11 && <Ejercicio11 />}
        {ejercicioActivo === 12 && <Ejercicio12 />}
        {ejercicioActivo === 13 && <Ejercicio13 />}
        {ejercicioActivo === 14 && <Ejercicio14 />}
        {ejercicioActivo === 15 && <Ejercicio15 />}
        {ejercicioActivo === 18 && <Ejercicio18 />}
        {ejercicioActivo === 19 && <Ejercicio19 />}
        {ejercicioActivo === 20 && <Ejercicio20 />}
        {ejercicioActivo === 21 && <Ejercicio21 />}
        {ejercicioActivo === 22 && <Ejercicio22 />}
        {ejercicioActivo === 23 && <Ejercicio23 />}
        {ejercicioActivo === 24 && <Ejercicio24 />}
        {ejercicioActivo === 25 && <Ejercicio25 />}
        {ejercicioActivo === 26 && <Ejercicio26 />}
        {ejercicioActivo === 27 && <Ejercicio27 />}
        {ejercicioActivo === 28 && <Ejercicio28 />}
        {ejercicioActivo === 29 && <Ejercicio29 />}
        {ejercicioActivo === 30 && <Ejercicio30 />}
      </div>

    </div>
  );
}

// Estilo auxiliar para los botones del menú lateral
const buttonStyle = (activo) => ({
  textAlign: 'left',
  padding: '10px 12px',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: activo ? '#2563eb' : 'transparent',
  color: '#fff',
  fontSize: '14px',
  transition: 'background-color 0.2s'
});