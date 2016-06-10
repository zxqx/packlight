import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Autocomplete from 'react-autocomplete';
import ui from 'redux-ui';
import cssModules from 'react-css-modules';
import throttle from 'lodash.throttle';
import styles from '../style/add-gear-form.css';

@cssModules(styles)
@ui({
  state: {
    input: '',
    selection: null,
    results: []
  }
})
export default class AddGearForm extends Component {
  static propTypes = {
    styles: PropTypes.object,
    addGearItem: PropTypes.func.isRequired,
    getGearListSuggestions: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this._getGearListSuggestions = throttle(this.getGearListSuggestions.bind(this), 400);
  }

  componentDidMount() {
    findDOMNode(this.refs.autocomplete).querySelector('input').focus();
  }

  handleInputChange(e, input) {
    this.props.updateUI({ input });
    if (!input) return;

    this._getGearListSuggestions(input);
  }

  selectSuggestion(input) {
    const selection = this.props.ui.results.find(r => r.name === input);
    this.props.updateUI({ input, selection });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { input, selection } = this.props.ui;
    if (!input || !selection) return;

    this.props.addGearItem(selection);

    this.props.updateUI({
      input: '',
      selection: null,
      results: []
    });
  }

  async getGearListSuggestions(input) {
    const results = await this.props.getGearListSuggestions(input);
    this.props.updateUI({ results });
  }

  render() {
    const { styles, ui } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <Autocomplete
          inputProps={{ placeholder: 'Add gear...' }}
          ref="autocomplete"
          value={ui.input}
          items={ui.results}
          getItemValue={item => item.name}
          onChange={this.handleInputChange.bind(this)}
          onSelect={this.selectSuggestion.bind(this)}
          renderItem={(item, isHighlighted) => (
            <div key={item.name} className={isHighlighted ? styles.highlighted : styles.suggestion}>
              {item.name}
            </div>
          )}
        />

        <input className={styles.submit} type="submit" value="Add" />
      </form>
    );
  }
}
