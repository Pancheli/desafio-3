import "./App.css";
import { BaseColaboradores } from "./database/data";
import { useState } from "react";
import Colaborador from "./components/Colaborador";
import BuscarColaborador from "./components/BuscarColaborador";
import ListadoColaborador from "./components/ListadoColaborador";

function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState("");

  //Filtrado
  let resultados = [];
  if (!busqueda) {
    resultados = colaboradores;
  } else {
    resultados = colaboradores.filter((colaborador) =>
    colaborador.nombre
    .toLocaleLowerCase()
    .includes(busqueda.toLocaleLowerCase()))
  }
  
  return <main className="App">
    <BuscarColaborador
    setBusqueda={setBusqueda} />
    <div className="main">
      <Colaborador colaboradores={colaboradores} setColaboradores={setColaboradores} />
      <ListadoColaborador colaboradores={resultados} />
    </div>


  </main>;
}

export default App;
