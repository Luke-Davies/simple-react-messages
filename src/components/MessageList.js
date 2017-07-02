import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    this.messages = this.props.messages.map((message) => <Message value={message} />);
    return (
      <div>
        {this.messages}
      </div>
    );
  }
}

export default MessageList;