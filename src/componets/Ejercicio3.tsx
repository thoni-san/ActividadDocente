// Componente que divide los valores de un arreglo para 5
// usando la función map y una función con parámetros

import { useState } from "react";

export const Ejercicio3 = () => {
  // Arreglo original definido por el ejercicio
  const arregloOriginal: number[] = [5,10,15,20,25,30,35,40,45,50];

  // Hook para guardar el resultado del nuevo arreglo
  const [arregloDividido, setArregloDividido] = useState<number[]>([]);

  // Función que recibe un arreglo y devuelve uno nuevo con los valores divididos para 5
  const dividirParaCinco = (arreglo: number[]): number[] => {
    return arreglo.map((valor) => valor / 5);
  };

  // Función que se ejecuta al hacer clic en el botón
  const manejarDivision = () => {
    const resultado = dividirParaCinco(arregloOriginal);
    setArregloDividido(resultado);
  };

  return (
    <div>
      <h3>Ejercicio 3: Dividir arreglo para 5 usando map</h3>
      <p>Arreglo original: [{arregloOriginal.join(", ")}]</p>
      <button className="btn btn-primary" onClick={manejarDivision}>
        Dividir para 5
      </button>
      <br />
      <br />
      <h4>Resultado: [{arregloDividido.join(", ")}]</h4>
    </div>
  );
};
