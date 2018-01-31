import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let text = this.refs.messageText.value;
    this.props.actions.send(text);
  }

  componentDidUpdate() {
    var elem = document.getElementById('message');
    elem.scrollTop = elem.scrollHeight;
  }


  render() {
    let i = 0, messages = this.props.messages.map(message => {
      return <div className="bubble">
        <li className="thread" key={i++}>{message}</li>
      </div>
    });
    return(
      <div className="container">
        <div className="form-components">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-group">
              <input type="text" ref="messageText" className="form-control"></input>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">Send</button>
              </span>
            </div>
          </form>
        </div>
        <div class="chat-thread" id="message">
          <ul>{messages}</ul>
        </div>
      </div>
    );
  }
}
Chat.propTypes = {
  actions: PropTypes.object,
  messages: PropTypes.array,
}
export default Chat;
