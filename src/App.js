import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import AddMessage from './components/AddMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.nextId = 1000;
    this.state = {
      messages: Array.from(new Array(4)).map((x, i) => {
        return { id: this.nextId, text: "Initial Test Message " + this.nextId++ }
      }).reverse()
    };
  }

  addMessage(text) {
    this.setState((prev,prop) => {
      return {messages: [{id: this.nextId++, text: text}, ...prev.messages]}
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Messages App</h2>
        </div>
        <p className="App-intro">
          A simple messages app implemented purely in react (no redux) using the create-react-app start kit.
        </p>
        <div className="App-body">
          <AddMessage addMessage={this.addMessage.bind(this)}/>
          <MessageList messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
