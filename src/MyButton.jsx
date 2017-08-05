import React from 'react'

const btnProgrammingLanguage = {
  background: 'transparent',
  color: 'white',
  border: '0',
  'font-size': '20px',
  height: '10vh',
  width: '100%',
  'padding-right': '50px',
  'text-align': 'right',
  'border-bottom': 'rgba(255,255,255,0.1)'
}

const MyButton = (props) => {
    return (
        <button style={btnProgrammingLanguage} onClick={() => props.onClick(props.word)}>{props.name}</button>
    )
}

export default MyButton