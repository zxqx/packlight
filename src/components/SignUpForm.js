import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import ui from 'redux-ui';
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

  handleFormSubmit(e) {
    e.preventDefault();

    const { email, password } = this.props.ui;
    this.props.createUser(email, password);
  }

  render() {
    const { styles, ui } = this.props;

    return (
      <div className={styles.signup}>
        <h2 className={styles.h2}>Sign up</h2>

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
            <input className={styles.submit} type="submit" value="Sign up" />
            <Link to="/login" className={styles.login}>Already have an account? Log in.</Link>
          </div>
        </form>
      </div>
    );
  }
}
