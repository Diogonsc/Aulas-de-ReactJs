import React from 'react'
import alunos from '../../data/alunos'

const ListaAlunos = () => {

    const lista = alunos.map(aluno => {
        return (
        <li key={aluno.id}>
            {aluno.id} - Aluno: {aluno.name} Nota:  {aluno.nota}
        </li>
        )
    })
    
    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {lista}
            </ul>
        </div>
    )
}

export default ListaAlunos
