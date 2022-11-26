import React from "react";

const ListadoColaborador = ({ colaboradores }) => {
  return (
    <div className="colaborador-container">
      <div className="tittle">
        <h2>Listado de colaboradores</h2>
      </div>
      <div className="list-container">
        <ul className="colaborador-list">
          {colaboradores.map((colaborador) => (
            <li key={colaborador.id.toString}>
              👨‍💼{colaborador.nombre.toLowerCase()} <br /> 📧 {""}
              {colaborador.correo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default ListadoColaborador;