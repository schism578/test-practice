import React, { Component } from 'react';
import Messages from './messages/messages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Messages</h1>
        <Messages name='Messages' unread={0} />
        <Messages name='Notifications' unread={10} />
      </div>
    );
  }
}

export default App;