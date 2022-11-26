import React,  {useState } from "react";

const Colaborador = ({ colaboradores, setColaboradores}) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");

    const handleOnChangeNombre = (event) => setNombre(event.target.value);
    const handleOnChangeCorreo = (event) => setCorreo(event.target.value);
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const nuevoColaborador = {
            id: Date.now(),
            nombre: nombre,
            correo: correo,
        };
        setColaboradores([...colaboradores, nuevoColaborador]);
        setNombre("");
        setCorreo("");
        document.getElementById("nombre").focus();
    };

    return (
        <div className="colaborador-main">
            <div className="tittle">
                <h3>Agregar nuevo colaborador</h3>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div className="colab-name">
                    <label htmlFor="nombre">Nombre del colaborador</label>
                    <input 
                        type="text"
                        id="nombre"
                        className="form-control"
                        value={nombre}
                        placeholder="Nombre colaborador"
                        onChange={handleOnChangeNombre} />
                </div>
                <div className="colab-mail">
                    <label htmlFor="nombre">Correo Electrónico</label>
                    <input 
                        type="email"
                        id="correo"
                        className="form-control"
                        value={correo}
                        placeholder="Correo colaborador"
                        onChange={handleOnChangeCorreo} />
                </div>
                {nombre.length && correo.length >= 5 ? (
                    <button type="submit" id="btn-add">
                        Agregar
                    </button>
                ) : (
                    <div className="advice-text">
                        <p>Introduce ambos campos para habilitar el botón de agregar un nuevo colaborador</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Colaborador;