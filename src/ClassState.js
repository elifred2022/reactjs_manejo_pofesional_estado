import React from "react";


class ClassState extends React.Component {
    constructor(props) { // super para que siga funcionando this
        super(props);

        this.state = {
            error: false,
        };
    }

    render() {
        

        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Escriba el codigo de seguridad</p>

                {this.state.error && ( // && ES TRUE
                    <p>Error: el codigo es incorecto</p>
                )}
                
                <input placeholder="Codigo de seguridad"></input>
                <button
                    onClick={() => 
                        this.setState(prevState => ({ error: !prevState.error }))
                    } 
                >Comprobar</button>
            </div>
        );
    } 
}

export { ClassState };