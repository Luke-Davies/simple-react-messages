import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="Message">
        {this.props.value.text}
      </div>
    );
  }
}

export default Message;