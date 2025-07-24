import { Ejercicio1 } from "./componets/Ejercicio1";
import { Ejercicio2 } from "./componets/Ejercicio2";
import { Ejercicio3 } from "./componets/Ejercicio3";
import { Ejercicio4 } from "./componets/Ejercicio4";
import { Ejercicio5 } from "./componets/Ejercicio5";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción TS - React</h1>
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
      <Ejercicio4 />
      <Ejercicio5 />
    </div>
  );
};

export default App;
