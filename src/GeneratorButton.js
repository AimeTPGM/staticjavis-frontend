import React from 'react'

const btnGenerator = {
  height: '10vh',
  background: 'rgba(255,255,255,0.1)',
  width: '102%',
  border: '0',
  'font-size': '20px',
  color: 'white'

}

const GeneratorButton = (props) => {
     return (
     	<button style={btnGenerator} onClick={() => props.onClick()}>Generate!</button>
        
    )
}

export default GeneratorButton