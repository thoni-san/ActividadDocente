import { useState } from "react";

export const Ejercicio3 = () => {
  
  const arregloOriginal: number[] = [5,10,15,20,25,30,35,40,45,50];

  const [arregloDividido, setArregloDividido] = useState<number[]>([]);

  const dividirParaCinco = (arreglo: number[]): number[] => {
    return arreglo.map((valor) => valor / 5);
  };

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
