import React from "react";
import { Loading } from "./Loading";

class ClassState extends React.Component {
    constructor(props) { // super para que siga funcionando this
        super(props);

        this.state = {
           // value: '',
            error: true,
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

                this.setState({ loading: false });

                console.log("terminando la validacion")
            }, 3000);
        }
    }


    render() {
        

        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                
                <p>Escriba el codigo de seguridad</p>

                {this.state.error && ( // && ES TRUE
                    <p>Error: el codigo es incorecto</p>
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