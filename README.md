# password y usuarios

// && ES TRUE

# React.Component vs. useState video 3
<input placeholder="Codigo de seguridad"></input>
                <button
                    onClick={() => 
                        this.setState(prevState => ({ error: !prevState.error }))
                    } 
                >Comprobar</button>

# clase 4 Efectos con useEffect

# clase 5 componentes ciclo de vida 
componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidUpdate() {
        console.log("Actualizacion");

# clase desde 6 a 8

# clase vista 9

# visto clase 11, se sacaron codgos de los condicionales y se colcoaron funciones q son llamadas desde los codicionales
todavia no me funciona el boton de no

# para poder hacer que funcione le boton de no solo comente os estados; solo q llame el setState original 

const onReset = () => {
    setState({
      //  ...state,
       // confimed: false,
      //  deleted: false,
      //  value: '',
    });
   }

# clase 12 useReducer
nos permite declarar todos los posibles estados

const reducer = (state, action) => { esta es una de as formas de crear el reducer
};