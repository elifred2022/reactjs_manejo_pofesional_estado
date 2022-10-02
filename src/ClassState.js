import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
    constructor(props) { // super para que siga funcionando this
        super(props);

        this.state = {
            value: '',
            error: false,
            loading: false,
        };
    }

    // metodos de vida utiles
    //componentWillMount()
 //   UNSAFE_componentWillMount() {   
   //     console.log("UNSAFE_componentWillMount")     }

   /* componentDidMount() {
        console.log("componentDidMount")
    } */

    componentDidUpdate() {
        console.log("Actualizacion");

        if (!!this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validacion")
                
                if (SECURITY_CODE === this.state.value){
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false });
                }
                

                console.log("terminando la validacion")
            }, 3000);
        }
    }


    render() {
        

        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                
                <p>Escriba el codigo de seguridad</p>

                {(this.state.error && !this.state.loading)   // && ES TRUE
                && ( 
                <p>Error: el codigo es incorrecto</p>
                )}

                {this.state.loading && ( // && ES TRUE
                    <Loading />
                )}
                
                <input 
                placeholder="Codigo de seguridad"
                value={this.state.value}
                onChange={(event) => {
                    this.setState({ value: event.target.value });
                }}
                ></input>
                <button
                    onClick={() => this.setState({ loading: true })} 
                >Comprobar</button>
            </div>
        );
    } 
}

export { ClassState };