import React from 'react'

const genText = {
  width: '100%',
  height: '90vh',
  background: 'rgba(255,255,255,0.2)',
  color: 'white',
  'font-size': '20px'
}

const btnGenerator = {
  height: '10vh'
}



const MyTextArea = (props) => {
     return (
        <textarea style={genText} value={props.value} onChange={props.onChange}> </textarea>
        
    )
}

export default MyTextArea