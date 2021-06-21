import React from 'react'
import If from './If'

const UsuarioInfo = (props) => {

    const usuario = props.usuario || {}

    return (
        <div>
           <If test={usuario && usuario.nome}>
           Seja bem vindo <b>{usuario.nome}</b>!
           </If>
           <If test={usuario && !usuario.nome}>
           Seja bem vindo <b>Amigo</b>!
           </If>
        </div>
    )
}

export default UsuarioInfo
