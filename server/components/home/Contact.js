import React, { Component } from 'react';
import axios from 'axios';
import Slice from './Slice';
import Title from './Title';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      sendBtnClass: 'contact__form__button',
      sendBtnText: 'Send'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.updateSendButton = this.updateSendButton.bind(this);
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
          this.updateSendButton();
        }
      })
      .catch(err => console.log(err));
  }

  updateSendButton() {
    // Update class for button
    this.setState({ sendBtnClass: 'contact__form__button success' });
    // Update button text
    this.setState({ sendBtnText: 'Message send, thanks' });
    // Also set inputs back to inital state
    this.setState({ email: '' });
    this.setState({ name: '' });
    this.setState({ message: '' });
  }

  render() {
    return (
      <section className="contact__wrapper" id="contact">
        <Slice postion="bottom" color="white" />
        <Title title="Contact" accent="" color="light" />
        <form onSubmit={this.handleSend} className="contact__form">
          <label
            className="contact__label"
            htmlFor="name"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Name
            <input
              aria-label="name"
              className="contact__input"
              required
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>
          <label
            className="contact__label"
            htmlFor="email"
            data-aos="fade-down"
            data-aos-delay="750"
          >
            Email
            <input
              aria-label="email"
              className="contact__input"
              required
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </label>
          <label
            className="contact__label"
            htmlFor="message"
            data-aos="fade-down"
            data-aos-delay="1000"
          >
            Message
            <textarea
              aria-label="message"
              className="contact__input"
              required
              cols="33"
              rows="15"
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.handleInput}
            />
          </label>
          <input className={this.state.sendBtnClass} type="submit" value={this.state.sendBtnText} />
        </form>
        <p className="contact__or">or</p>
        <p className="contact__email">jwalkercreations@gmail.com</p>
      </section>
    );
  }
}

export default Contact;
