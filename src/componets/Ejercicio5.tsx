// Componente que funciona como acumulador en pasos de 5
// usando useState para manejar el valor acumulado

import { useState } from "react";

export const Ejercicio5 = () => {
  // Hook useState para manejar el estado del acumulador
  const [acumulador, setAcumulador] = useState<number>(0);

  // Función para incrementar en 5
  const incrementar = () => {
    setAcumulador(acumulador + 5);
  };

  // Función para disminuir en 5
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
