import { useState } from "react";

export const Ejercicio2 = () => {
  
  const [entrada, setEntrada] = useState<string>("");

  const [suma, setSuma] = useState<number>(0);

  const sumarElementos = (arreglo: number[]): number => {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  };

  const manejarSuma = () => {
  
    const arregloNumeros = entrada
      .split(",")
      .map((valor) => Number(valor.trim()))
      .filter((valor) => !isNaN(valor));

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
