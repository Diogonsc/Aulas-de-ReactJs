import React from 'react'

const Aleatorio = (props) => {
    const min = props.min
    const max = props.max
    const aleatrorio = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><b>Valor Mínimo: </b>{ props.min }</p>
            <p><b>Valor Maximo: </b>{ props.max }</p>
            <p><b>Valor Escolhido: </b>{ aleatrorio }</p>
        </div>
    )
}

export default Aleatorio
