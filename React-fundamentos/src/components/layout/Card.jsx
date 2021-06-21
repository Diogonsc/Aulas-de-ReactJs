import React from 'react'
import './Card.css'

const Card = (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#222',
        borderColor: props.color || '#222'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}

export default Card
