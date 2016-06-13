import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import ui from 'redux-ui';
import styles from '../style/login-form.scss';

@cssModules(styles)
@ui({
  state: {
    email: '',
    password: ''
  }
})
export default class LoginForm extends Component {
  static propTypes = {
    styles: PropTypes.object,
    user: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired
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
      <div className={styles.login}>
        <h2 className={styles.h2}>Log in</h2>

        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.email} type="email" id="email" name="email" value={this.props.ui.email} onChange={this.handleChange.bind(this)} />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.password} type="password" id="password" name="password" value={this.props.ui.password} onChange={this.handleChange.bind(this)} />
          </div>

          <div className={styles.field}>
            <input className={styles.submit} type="submit" value="Log in" />
            <Link to="signup" className={styles.signup}>
              Don't have an account? Sign up.
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
