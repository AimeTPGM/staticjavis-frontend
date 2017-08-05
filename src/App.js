import React, { Component } from 'react';
import logo from './logo.svg';
import MyButton from './MyButton'
import './App.css';

class App extends Component {
  handleClick(word) {
    alert(word)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To got started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div class="btn-group">
          <MyButton onClick={this.handleClick} word={'Arm'} name={'ArMSe'}/>
          <MyButton onClick={this.handleClick} word={'Aim'} name={'Aim'}/>
          <MyButton onClick={this.handleClick} word={'Fon'} name={'Fon'}/>
        </div> 

        <textarea name="txtFolderName" rows="1"></textarea>

      </div>
    );
  }
}

export default App;
