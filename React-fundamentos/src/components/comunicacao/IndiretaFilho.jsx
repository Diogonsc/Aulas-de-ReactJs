import React from 'react'

const IndiretaFilho = (props) => {
    const min = 0
    const max = 60
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <button className="btn btn-button btn-success" onClick={ function () {props.quandoClicar('Diogo', gerarIdade(), gerarNerd)}}>
                Fornecer Informações
            </button>
        </div>
    )
}

export default IndiretaFilho
