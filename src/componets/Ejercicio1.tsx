import { useState } from "react";

export const Ejercicio1 = () => {

  const [lado, setLado] = useState<number>(0);

  const [area, setArea] = useState<number>(0);

  const calcularAreaCuadrado = (lado: number): number => {
    return lado * lado;
  };

  const manejarCalculo = () => {
    const resultado = calcularAreaCuadrado(lado);
    setArea(resultado);
  };

  return (
    <div>
      <h3>Ejercicio 1: Área de un cuadrado</h3>
      <input
        type="number"
        placeholder="Ingrese el lado"
        value={lado}
        onChange={(e) => setLado(Number(e.target.value))}
        className="form-control"
      />
      <br />
      <button className="btn btn-primary" onClick={manejarCalculo}>
        Calcular área
      </button>
      <br />
      <br />
      <h4>Área: {area}</h4>
    </div>
  );
};
