import React from 'react'

const MyButton = (props) => {
    return (
        <button onClick={() => props.onClick(props.word)}>{props.name}</button>
    )
}

export default MyButton