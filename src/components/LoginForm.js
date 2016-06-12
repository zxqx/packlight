import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import ui from 'redux-ui';
import styles from '../style/login.scss';

@cssModules(styles)
@ui({
  state: {
    email: '',
    password: ''
  }
})
export default class LoginForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    styles: PropTypes.object
  };

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.props.updateUI(nextState);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { email, password } = this.props.ui;
    this.props.loginUser(email, password);
  }

  render() {
    const { styles, ui } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={this.handleChange.bind(this)} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={this.handleChange.bind(this)} />

        <input className={styles.submit} type="submit" value="Log in" />
      </form>
    );
  }
}
