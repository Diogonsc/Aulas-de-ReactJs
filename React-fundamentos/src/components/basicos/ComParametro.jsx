import React from 'react'

const ComParametro = (props) => {
    const status = props.Nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
       <div>
           <h2>{ props.Title }</h2>
           <p><b>{ props.Aluno }</b> tem nota <strong> {props.Nota }</strong> e está { status} !</p>
           
       </div>
    )
}

export default ComParametro
