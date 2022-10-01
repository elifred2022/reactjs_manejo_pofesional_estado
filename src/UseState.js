import React from "react";

const SECURITY_CODE = 'paradigma'; //como es una variable constante permanente por convencion se coloca en mayuscula y separada por un guion bajo

function UseState({ name }) {
    const [value, setValue] = React.useState(''); //este es un estado dinamico con un stign vacio
    const [error, setError] = React.useState(false); // ESTO ES un ESTADO
    const [loading, setLoading] = React.useState(false);

    console.log(value);

    React.useEffect(() => {
        console.log("emepzando el efecto")
        
        if (!!loading) {
            setTimeout(() =>{
                console.log("Haciendo la validacion")
                
                if (value === SECURITY_CODE) {
                    setLoading(false);
                    // setError(false);
                } else {
                    setError(true);
                    setLoading(false);
                }
                
                

                console.log("Terminando la validacion")
            }, 3000);
        }
       
        console.log("terminando el efecto")
    }, [loading]);

    return (
    <div>
        <h2>Eliminar {name}</h2>
        <p>Escriba el codigo de seguridad</p>

        {(error && !loading) && ( // && ES TRUE
            <p>Error: el codigo es incorecto</p>
        )}

        

        {loading && ( // && ES TRUE
            <p>Cargando...</p>
        )}
    
        <input 
        placeholder="Codigo de seguridad"
        value={value}
        onChange={(event) => {
            setError(false);
            setValue(event.target.value);
        }}
        ></input>
        <button
            onClick={() => { 
           // setError(false); // este fue para resolver la recarga de error y se quite el mensaje
            setLoading(true); //! negandolo pasa de tru a flase o viceversa
        } }
        >Comprobar</button>
    </div>
    );
}

export { UseState };