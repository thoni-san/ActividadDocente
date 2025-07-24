// Componente que suma los elementos de un arreglo
// usando una función con parámetros

import { useState } from "react";

export const Ejercicio2 = () => {
  // Hook para manejar el valor del arreglo (en texto)
  const [entrada, setEntrada] = useState<string>("");

  // Hook para guardar el resultado de la suma
  const [suma, setSuma] = useState<number>(0);

  // Función que convierte el string a arreglo de números y suma los elementos
  const sumarElementos = (arreglo: number[]): number => {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  };

  // Función que se ejecuta al hacer clic en el botón
  const manejarSuma = () => {
    // Convertir string a arreglo de números
    const arregloNumeros = entrada
      .split(",")
      .map((valor) => Number(valor.trim()))
      .filter((valor) => !isNaN(valor)); // Filtra valores no numéricos

    const resultado = sumarElementos(arregloNumeros);
    setSuma(resultado);
  };

  return (
    <div>
      <h3>Ejercicio 2: Sumar elementos de un arreglo</h3>
      <input
        type="text"
        placeholder="Ej: 1, 2, 3"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        className="form-control"
      />
      <br />
      <button className="btn btn-primary" onClick={manejarSuma}>
        Calcular suma
      </button>
      <br />
      <br />
      <h4>Suma total: {suma}</h4>
    </div>
  );
};
