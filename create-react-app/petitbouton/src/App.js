import React, { Component } from 'react';// eslint-disable-line
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // console.log('je suis le person qui fais ca tous');
    // console.log('this.displayName:', this.displayName);

    this.state={
      objStyle :{backgroundColor: 'blue'}
    };
  }
  colors = [
    {id:1, name:'violet', color:'#f5aafb'},
    {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
    {id:3, name:'pale green', color:'#aafbde'},
    {id:4, name:'vermillon', color:'#fe532e'},
    {id:5, name:'sky blue', color:'#82c4fa'},
    {id:6, name:'salmon', color:'#fb8b8b'},
  ]
  changeColor(color){
    // console.log
    this.setState({
      objStyle :{backgroundColor: color}
    });
  }
  pushColor = () =>{
    const newColor = new Object();
    newColor.name = document.getElementById('item').value;
    newColor.color = document.getElementById('color').value;
    this.colors.push(newColor);
    // console.log(this.colors);
    this.forceUpdate();
  }
  render() {
    console.log('hello');
    return (
      <div className="App">
        <div className="App-header" style={this.state.objStyle}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to may/'s work</h2>
        </div>
        <p className="App-intro">
          this is me who is doing all this changes. the secret of codding....
        </p>

        <ul className="color-container">{
          this.colors.map( item =>
          <li key={item.id}>
            <button style={{backgroundColor: item.color}}
              onClick={() => this.changeColor(item.color)}>
              {item.name}
            </button>
          </li>
            )
          }
        </ul>

       <div  className="all">
         <div className="groupadding">
            <div  className="group1">
              <p className="item">color name</p>
              <input type="text" id="item"/>
            </div>
            <div className="group2">
              <p className="color">Color</p>
              <input type="text" id="color"/>
            </div>
          </div>

          <button onClick={this.pushColor}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
