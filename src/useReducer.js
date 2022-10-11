const initialState = {
    value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
}

// ESTE ARCHIVO SE CREAO PAR AAPRENDER LAS VARIAS FORMAS DE HACER REDUCER, NO SE ESTA LLAMANDO DE NINGUN LADO

//const reducer = (state, action) => { esta es una de as formas de crear el reducer
//};

// reducer con condicional IF

const reducerIf = (state, action) => { 
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false,
        };
    } else if (action.type === 'CHECK') {
        return {
            ...state,
            loading: true,
        };
    } else {
        return {
            ...initialState,
        };
    }
};

// reducer con switch

const reducerSwitch = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        // break; no es neceario colocar breack con el return
        case 'CHECK':
            return {
                ...state,
            loading: true,
            };

        default:
            return {
                ...state,
            };


    }
}

// otra manera; reducerObject ESTE ES EL PREFERIDO DEL PROFESOR

const reducerObject = (state) => ({
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  }, 

  'CHECK': {
    ...state,
    loading: false,
  },
});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state)[action.type]
    } else {
        return state;
    }
}