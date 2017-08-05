import React, { Component } from 'react';
import logo from './logo.svg';
import MyButton from './MyButton'
import MyTextArea from './MyTextArea'
import GeneratorButton from './GeneratorButton'
import './App.css';

const mainDiv = {
  width: '80%'
};
const displayMainDiv = {
  display: 'flex'
};
const btnDiv = {
  width: '20%',
  background: '#1A272B',
  height: '100vh'
};
const btnProgrammingLanguage = {
  background: 'transparent'
}
const mainStyle = {
  background: '#1A272B'
}

class App extends Component {
  handleChange = (e) => {
    console.log(e.target.value) 
    this.setState ({text: e.target.value})
  }

  sendReq = async () => {
    const res = await fetch('http://localhost:3001/gen/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "programmingLanguage" : "js",
        "project": "test",
        "keywords" : [
          {
            "keyword" : "get",
            "param" : "/test"
          },
          {
            "keyword" : "post",
            "param" : "/lol"
          },
          {
            "keyword" : "listen",
            "param" : "3000"
          }
        ]
      })
    })
    console.log(await res.text())
  }

state = {text: "get /test\npost /lol\nlisten 3000"}

  render() {
    return (
      <div className="App" style={mainStyle}>
        <div style={displayMainDiv}>
          <div style={btnDiv}>
            <MyButton onClick={this.handleClick} name={'NodeJS + ExpressJS'} />
            <MyButton onClick={this.handleClick} name={'Python Flask'}/>
          </div>
          <div style={mainDiv}>
            <MyTextArea value={this.state.text} onChange={this.handleChange}/>
            <GeneratorButton onClick={this.sendReq}/>
          </div>
        </div>

        

      </div>
    );
  }
}

export default App;
