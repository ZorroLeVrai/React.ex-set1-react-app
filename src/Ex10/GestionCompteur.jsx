import React, { useReducer } from 'react'
import Compteur from './Compteur';
import ControlCompteur from './ControlCompteur';

function reducer(state, action) {
    switch (action.type) {
      case "counter_offset":
        return state + action.payload;
      case "counter_reset":
        return 0;
      default:
        throw new Error("Unkown action type");
    }
}

const GestionCompteur = () => {
    const [counter, dispatch] = useReducer(reducer, 0);

    return (
    <div>
        <Compteur counter={counter} />
        <ControlCompteur dispatch={dispatch} />
    </div>
    );
}

export default GestionCompteur;