// Componente que calcula el promedio de calificaciones de alumnos
// utilizando una función con parámetros

import { useState } from "react";

// Definir el tipo Alumno (opcional pero recomendado en TS)
type Alumno = {
  nombre: string;
  edad: number;
  calificacion: number;
};

export const Ejercicio4 = () => {
  // Arreglo de alumnos con nombre, edad y calificación
  const alumnos: Alumno[] = [
    { nombre: "Viviana", edad: 19, calificacion: 10 },
    { nombre: "Wendy", edad: 20, calificacion: 8 },
    { nombre: "Gerson", edad: 18, calificacion: 9 },
  ];

  // Hook para guardar el promedio calculado
  const [promedio, setPromedio] = useState<number>(0);

  // Función que recibe un arreglo de alumnos y calcula el promedio de calificaciones
  const calcularPromedio = (lista: Alumno[]): number => {
    const total = lista.reduce((suma, alumno) => suma + alumno.calificacion, 0);
    return total / lista.length;
  };

  // Función que se ejecuta al hacer clic en el botón
  const manejarPromedio = () => {
    const resultado = calcularPromedio(alumnos);
    setPromedio(resultado);
  };

  return (
    <div>
      <h3>Ejercicio 4: Promedio de calificaciones</h3>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            {alumno.nombre} - Edad: {alumno.edad} - Nota: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={manejarPromedio}>
        Calcular promedio
      </button>
      <br />
      <br />
      <h4>Promedio: {promedio.toFixed(2)}</h4>
    </div>
  );
};
