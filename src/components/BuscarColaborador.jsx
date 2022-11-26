import React from "react";

const BuscarColaborador = ({ setBusqueda }) => {
  const handleOnChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <nav>
      <span>Buscar Colaboradores</span>
      <input
        type="text"
        placeholder="Buscar colaborador"
        onChange={handleOnChangeBusqueda}
        list="datalistOptions"
      />
      <datalist id="datalistOptions">
        <option value="Colaborador 1" />
        <option value="Colaborador 2" />
        <option value="Colaborador 3" />
      </datalist>
    </nav>
  );
};

export default BuscarColaborador;
