import React from 'react'

const Botoes = (props) => {
    return (
        <div>
            <button
          className="btn, btn-button"
          onClick={props.setInc}
          style={{ width: "30px", height: "30px", backgroundColor: "#7251b5" }}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="btn, btn-button"
          onClick={props.setDec}
          style={{ width: "30px", height: "30px", backgroundColor: "#7251b5" }}
        >
          {" "}
          -{" "}
        </button>
        </div>
    )
}

export default Botoes
