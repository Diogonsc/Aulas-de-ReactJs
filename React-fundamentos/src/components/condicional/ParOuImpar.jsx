import React from 'react'

const ParOuImpar = (props) => {
    const isPar = props.numero % 2 ===0
    return (
        <div> 
            {isPar ? <p>Par</p> : <p>Ímpar</p> }
        </div>
    )
}

export default ParOuImpar
