import React, {Component} from 'react';

import Home from './Pages/Home'
import './App.css';
import SuperUser from './Pages/SuperUser';
import Voice from './img/icons/voice.png';
import Text from './img/icons/text.png';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      handleUser: false
    }
  }


  handleRenderUser = () => {
    this.setState({handleUser: !this.state.handleUser})
    console.log(this.state.handleUser);
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.handleRenderUser}>
        <img src={this.state.handleUser ? Text : Voice} alt="Icon" style={{width:'45px'}}/>
        </button>

        {
          this.state.handleUser === true? <SuperUser/>  : <Home/>

        }

        
      </div>
    );
  }
}
