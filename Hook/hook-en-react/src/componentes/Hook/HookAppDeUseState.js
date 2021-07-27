import React, {useState} from 'react';

import './Syled.css';

export const HookAppDeUseState = () => {

        const [Josue, setJosue] = useState(0)

        const Flecha = () => {
            setJosue( Josue + 1 )  
        }

        const Coque = () => {
            setJosue( Josue - 1 )  
        }

    return (
        <>
            <h2>Contador { Josue }</h2>
            <hr />
            <button  
            className="btn btn-primary"
            onClick={Flecha}
           
            >
                    +1
            </button>
           





           
            <button  
            className="btn btn-danger"
           
            onClick={Coque}
            >
                    -1
            </button>
        </>  
    )
}
