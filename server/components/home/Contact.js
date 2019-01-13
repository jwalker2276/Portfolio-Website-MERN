import React, { Component } from 'react';
import axios from 'axios';
import Slice from './Slice';
// Styles
import '../../scss/home/contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      emailSuccessful: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleInput(event) {
    const { name } = event.currentTarget;
    const { value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  }

  handleSend(event) {
    event.preventDefault();

    const { email, name, message } = this.state;

    const payload = {
      email,
      name,
      message
    };

    // Send contact request and check response
    axios
      .post('/contact', payload)
      .then(res => {
        if (res.status === 200) {
          this.setState({ emailSuccessful: true });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="contact__wrapper">
        <Slice postion="bottom" color="white" />
        <Slice position="top-left" color="darkblue" />
        <div className="contact__form">
          <form onSubmit={this.handleSend}>
            <label htmlFor="name">
              Name
              <input
                required
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                required
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                required
                cols="33"
                rows="15"
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleInput}
              />
            </label>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
