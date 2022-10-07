import React from "react";

const SECURITY_CODE = 'paradigma'; //como es una variable constante permanente por convencion se coloca en mayuscula y separada por un guion bajo

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

  //  const [value, setValue] = React.useState(''); //este es un estado dinamico con un stign vacio
   // const [error, setError] = React.useState(false); // ESTO ES un ESTADO
   // const [loading, setLoading] = React.useState(false);

    console.log(state); // si colocabamos state.value arroajaba eror garafal

    React.useEffect(() => {
        console.log("emepzando el efecto")
        
        if (!!state.loading) {
            setTimeout(() =>{
                console.log("Haciendo la validacion")
                
                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                        confirmed:true,
                    });
                    //setLoading(false);
                    // setError(false);
                } else {
                    setState({
                        ...state,
                        error: true,
                        loading: false,
                    })
                    //setError(true);
                    //setLoading(false);
                }
                
                console.log("Terminando la validacion")
            }, 3000);
        }
       
        console.log("terminando el efecto")
    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Escriba el codigo de seguridad</p>
        
                {(state.error && !state.loading) && ( // && ES TRUE
                    <p>Error: el codigo es incorecto</p>
                )}
        
                {state.loading && ( // && ES TRUE
                    <p>Cargando...</p>
                )}
            
                <input 
                placeholder="Codigo de seguridad"
                value={state.value}
                onChange={(event) => {
                    setState({
                        ...state,
                        value: event.target.value,
                    });
                    // setError(false);
                    // setValue(event.target.value);
                }}
                ></input>
                <button
                    onClick={() => { 
                   // setError(false); // este fue para resolver la recarga de error y se quite el mensaje
                   // setLoading(true); //! negandolo pasa de tru a flase o viceversa
        
                   setState({
                    ...state,
                    loading: true,
                   });
                } }
                >Comprobar</button>
            </div>
            );
    } else if (!!state.confirmed && !state.deleted) { // !! doble negacion es true y ! una negacion es flaseS
        return commit (
            <React.Fragment>
                    <p>¿esta seguro de eliminar useState?</p>
                    <button 
                    onClick={() => {
                        setState({
                            ...state,
                            deleted: true,
                        });
                    } }
                    
                    >Si, Eliminar</button>
                    <button
                    onClick={() => {
                        setState({
                            ...state,
                            confimed: false,
                            value: '',
                        });
                    } }
                    >No</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                    <p>eliminado con exito</p>

                    <button
                    onClick={() => {
                        setState({
                            ...state,
                            confimed: false,
                            deleted: false,
                            value: '',
                        });
                    } }
                    >Volver atras</button>
            </React.Fragment>
        )
    }
    
}

export { UseState };