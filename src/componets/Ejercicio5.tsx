import { useState } from "react";

export const Ejercicio5 = () => {
  
  const [acumulador, setAcumulador] = useState<number>(0);

  const incrementar = () => {
    setAcumulador(acumulador + 5);
  };

  const disminuir = () => {
    setAcumulador(acumulador - 5);
  };

  return (
    <div>
      <h3>Ejercicio 5: Acumulador de 5</h3>
      <h4>Valor actual: {acumulador}</h4>
      <button className="btn btn-success" onClick={incrementar}>
        Incrementar +5
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={disminuir}>
        Disminuir -5
      </button>
    </div>
  );
};
