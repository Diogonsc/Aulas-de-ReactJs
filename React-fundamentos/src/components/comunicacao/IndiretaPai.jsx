import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = () => {
    const[nome, setNome] = useState('')
    const[idade, setIdade] = useState(0)
    const[nerd, setNerd] = useState(false)

    const fornecerInfo = (nome, idade, nerd) => {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><b>{idade} </b></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfo} />
        </div>
    )
}

export default IndiretaPai
