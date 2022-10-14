import React from "react";

const SECURITY_CODE = 'paradigma'; //como es una variable constante permanente por convencion se coloca en mayuscula y separada por un guion bajo

function UseReducer ({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
                    // por convencion ahora no es setstate si no dispatch

    console.log(state);
  //  const [value, setValue] = React.useState(''); //este es un estado dinamico con un stign vacio
   // const [error, setError] = React.useState(false); // ESTO ES un ESTADO
   // const [loading, setLoading] = React.useState(false);

  /* const onConfirm = () => { ME LA LLEVE A REDUCER 'CNFIRM'
    setState({
        ...state,
        error: false,
        loading: false,
        confirmed:true,
    });
   }; */

  /* const onError =() => {
    setState({
        ...state,
        error: true,
        loading: false,
    });
   };*/



 /*  const onCheck = () => {
    setState({
        ...state,
        loading: true,
       });
   };*/

 /*  const onDelete = () => {
    setState();
   }; */

  /* const onReset = () => {
    setState({
      //  ...state,
       // confimed: false,
      //  deleted: false,
      //  value: '',
    });
   } */
   // console.log(state); // si colocabamos state.value arroajaba eror garafal

    React.useEffect(() => {
        console.log("Empezando el efecto")
        
        if (!!state.loading) {
            setTimeout(() =>{
                console.log("Haciendo la validacion")
                
                if (state.value === SECURITY_CODE) {
                    dispatch({
                        type: 'CONFIRM'
                    });
                    
                } else {
                   dispatch({ type: 'ERROR '});
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
                    dispatch({ type: 'WRITE', payload: event.target.value });
                    //onWrite(event.target.value);
                   
                }}
                ></input>
                <button
                  onClick={() => { 
                    dispatch({ type: 'CHECK' });
                    //onCheck();
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
                        dispatch({ type: 'DELETE' });
                        //onDelete();
                        
                    } }
                    
                    >Si, Eliminar</button>
                    <button
                    onClick={() => {
                        dispatch({ type: 'RESET' });
                        //onReset();
                        
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
                        dispatch({ type: 'RESET' });
                        //onReset();
                        
                    } }
                    >Recuperar useState</button>
            </React.Fragment>
        )
    }
    
}



const initialState = {
        value: 'paradigma',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
}

// ESTE ARCHIVO SE CREAO PAR AAPRENDER LAS VARIAS FORMAS DE HACER REDUCER, NO SE ESTA LLAMANDO DE NINGUN LADO

//const reducer = (state, action) => { esta es una de as formas de crear el reducer
//};


// otra manera; reducerObject ESTE ES EL PREFERIDO DEL PROFESOR

const reducerObject = (state, payload) => ({
  'CONFIRM': {
    ...state,
    error: false,
    loading: false,
    confirmed:true,
    },
  
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  }, 

  'WRITE': {
    ...state,
    value: payload,
  },

  'CHECK': {
    ...state,
    loading: true,
  },

  'DELETE': {
    ...state,
    deleted: true,
},
    'RESET': {
       /*   ...state,
          confimed: false,
          deleted: false,
          value: '', */
      },

});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state;
    }
}

export { UseReducer };