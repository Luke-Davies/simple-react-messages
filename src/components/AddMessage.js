import React, { Component } from 'react';

class AddMessage extends Component {
  render() {
    this.input = '';
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (!this.input.value.trim()) {
            return;
          }
          this.props.addMessage(this.input.value);
          this.input.value = '';
        }}>
          <input ref={node => {
            this.input = node;
          }} />
          <button className="button" type="submit">
            Send
          </button>
        </form>

      </div>
    );
  }
}

export default AddMessage;