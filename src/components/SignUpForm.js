import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import ui from 'redux-ui';
import InputPassword from 'react-ux-password-field';
import styles from '../style/signup-form.scss';

@cssModules(styles)
@ui({
  state: {
    email: '',
    password: ''
  }
})
export default class SignUpForm extends Component {
  static propTypes = {
    styles: PropTypes.object,
    user: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired
  };

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.props.updateUI(nextState);
  }

  handlePasswordChange() {
    const { name, value } = this.refs.password.refs.password;
    let nextState = {};
    nextState[name] = value;

    this.props.updateUI(nextState);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { email, password } = this.props.ui;
    this.props.createUser(email, password);
  }

  hasEmailError() {
    const { user } = this.props;
    return user.error && user.error.type === 'email';
  }

  hasPasswordError() {
    const { user } = this.props;
    return user.error && user.error.type === 'password';
  }

  render() {
    const { styles, ui, user } = this.props;

    return (
      <div className={styles.signup}>
        <h2 className={styles.h2}>Sign up</h2>

        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={!this.hasEmailError() ? styles.email : styles.invalid} type="text" id="email" name="email" value={ui.email} onChange={this.handleChange.bind(this)} />

            <div className={styles.message}>
              {this.hasEmailError() ?
                user.error.message
              : null}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">Password</label>
            <InputPassword className={!this.hasPasswordError() ? styles.password : styles.invalid} onChange={this.handlePasswordChange.bind(this)} infoBar={false} unMaskTime={500} ref="password" id="password" name="password" />

            <div className={styles.message}>
              {this.hasPasswordError() ?
                user.error.message
              : null}
            </div>
          </div>

          <div className={styles.field}>
            <input className={styles.submit} type="submit" value="Sign up" />
            <Link to="/login" className={styles.login}>
              Already have an account? Log in.
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
