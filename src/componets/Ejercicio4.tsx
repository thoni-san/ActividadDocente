import { useState } from "react";

type Alumno = {
  nombre: string;
  edad: number;
  calificacion: number;
};

export const Ejercicio4 = () => {
  
  const alumnos: Alumno[] = [
    { nombre: "Anthoni", edad: 25, calificacion: 10 },
    { nombre: "Analia", edad: 13, calificacion: 8 },
    { nombre: "Diana", edad: 28, calificacion: 9 },
  ];

  const [promedio, setPromedio] = useState<number>(0);

  const calcularPromedio = (lista: Alumno[]): number => {
    const total = lista.reduce((suma, alumno) => suma + alumno.calificacion, 0);
    return total / lista.length;
  };

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
