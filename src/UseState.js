import React from "react";

function UseState({ name }) {
    const [error, setError] = React.useState(true); // ESTO ES un ESTADO

    return (
    <div>
        <h2>Eliminar {name}</h2>
        <p>Escriba el codigo de seguridad</p>

        {error && ( // && ES TRUE
            <p>Error: el codigo es incorecto</p>
        )}
    
        <input placeholder="Codigo de seguridad"></input>
        <button
            onClick={() => setError(!error)} //! negandolo pasa de tru a flase o viceversa
        >Comprobar</button>
    </div>
    );
}

export { UseState };