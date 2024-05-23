import React from 'react'

const ControlCompteur = ({dispatch}) => {
    return (
        <div>
          <button className="m-1" onClick={() => dispatch({type: "counter_offset", payload: 1})}>+</button>
          <button className="m-1" onClick={() => dispatch({type: "counter_offset", payload: -1})}>-</button>
          <button className="m-1" onClick={() => dispatch({type: "counter_reset"})}>Reset</button>
        </div>
    );
}

export default ControlCompteur;