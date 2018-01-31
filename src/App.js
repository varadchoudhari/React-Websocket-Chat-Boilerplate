import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat';
import SockJS from 'sockjs-client';

class App extends Component {
  constructor(props) {
    super(props);
    const sock = new SockJS('https://chat-server.azurewebsites.net/chat');
    sock.onopen = () => {
      console.log("connection open");
    };
    let self = this;
    sock.onmessage = e => {
      console.log("message received", e.data);
      self.setState({messages: [...self.state.messages, e.data]});
    };
    sock.onclose = () => {
      console.log("connection closed");
    }

    this.state = {
      actions: sock,
      messages: [],
    }
  }
  render() {
    return (
      <div className="App">
        <Chat {... this.state}/>
      </div>
    );
  }
}

export default App;
