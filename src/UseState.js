import React from "react";

function UseState({ name }) {
    const [error, setError] = React.useState(true); // ESTO ES un ESTADO
    const [loading, setLoading] = React.useState(false);

  

    React.useEffect(() => {
        console.log("emepzando el efecto")
        
        if (!!loading) {
            setTimeout(() =>{
                console.log("Haciendo la validacion")
    
                setLoading(false);
    
                console.log("Terminando la validacion")
            }, 3000);
        }
       
        console.log("terminando el efecto")
    }, [loading]);

    return (
    <div>
        <h2>Eliminar {name}</h2>
        <p>Escriba el codigo de seguridad</p>

        {error && ( // && ES TRUE
            <p>Error: el codigo es incorecto</p>
        )}

        {loading && ( // && ES TRUE
            <p>Cargando...</p>
        )}
    
        <input placeholder="Codigo de seguridad"></input>
        <button
            onClick={() => setLoading(true)} //! negandolo pasa de tru a flase o viceversa
        >Comprobar</button>
    </div>
    );
}

export { UseState };