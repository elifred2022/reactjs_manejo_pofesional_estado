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

   const onConfirm = () => {
  /*  dispatch({ type: actionTypes.confirm });  aca no era la vaina*/

    setState({
        ...state,
        error: false,
        loading: false,
        confirmed:true,
    });
   };

   const onError =() => {
   /* dispatch({ type: actionTypes.error }); */

    setState({
        ...state,
        error: true,
        loading: false,
    });
   };

   const onWrite = (newValue) => {
    setState({
        ...state,
        value: newValue,
    });
   }

   const onCheck = () => {
 /*   dispatch({ type: actionTypes.check }); */

    setState({
        ...state,
        loading: true,
       }); 
   };

   const onDelete = () => {
 /*   dispatch({ type: actionTypes.Delete }); */
    
    setState({
        ...state,
        deleted: true,
    }); 
   };

   const onReset = () => {
  /*  dispatch({ type: actionTypes.reset }); */

    setState({
      //  ...state,
       // confimed: false,
      //  deleted: false,
      //  value: '',
    }); 
   }
   // console.log(state); // si colocabamos state.value arroajaba eror garafal

    React.useEffect(() => {
        console.log("Empezando el efecto")
        
        if (!!state.loading) {
            setTimeout(() =>{
                console.log("Haciendo la validacion")
                
                if (state.value === SECURITY_CODE) {
                    onConfirm();
                    
                } else {
                   onError();
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
                    {(state.error && !state.loading) && ( 
                    <p>Error: el codigo es incorecto</p>
                    )} 
         
                    {state.loading && ( // && ES TRUE
                    <p>Cargando...</p>
                    )}
            
                <input 
                placeholder="Aca Codigo de seguridad"
                value={state.value}
                onChange={(event) => {
                    onWrite(event.target.value);
                   
                }}
                ></input>
                <button
                  onClick={() => { 
                   onCheck();
                } }
                >Comprobar</button>
            </div>
            );
    } else if (!!state.confirmed && !state.deleted) { // !! doble negacion es true y ! una negacion es flaseS
        return (
            <React.Fragment>
                    <p>¿esta seguro de eliminar useState?</p>
                    <button 
                    onClick={() => {
                        onDelete();
                        
                    } }
                    
                    >Si, Eliminar</button>
                    <button
                    onClick={() => {
                        onReset();
                        
                    } }
                    >No, me arrepenti</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                    <p>eliminado con exito</p>

                    <button
                    onClick={() => {
                        onReset();
                        
                    } }
                    >Recuperar useState</button>
            </React.Fragment>
        )
    }
    
}

export { UseState };