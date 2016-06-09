import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';
import throttle from 'lodash.throttle';
import CSSModules from 'react-css-modules';
import styles from '../style/add-gear-form.css';

@CSSModules(styles)
export default class AddGearForm extends Component {
  static propTypes = {
    addGearItem: PropTypes.func.isRequired,
    getGearListSuggestions: PropTypes.func.isRequired
  };

  constructor() {
    super();

    this._getGearListSuggestions = throttle(this.getGearListSuggestions.bind(this), 400);

    this.state = {
      input: '',
      selection: null,
      results: []
    }
  }

  handleInputChange(e, input) {
    this.setState({ input });
    if (!input) return;

    this._getGearListSuggestions(input);
  }

  selectSuggestion(input) {
    const selection = this.state.results.find(r => r.name === input);
    this.setState({ input, selection });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { input, selection } = this.state;
    if (!input || !selection) return;

    this.props.addGearItem(selection);

    this.setState({
      input: '',
      selection: null,
      results: []
    });
  }

  getGearListSuggestions(input) {
    return this.props.getGearListSuggestions(input)
      .then(results => this.setState({ results }));
  }

  render() {
    const { styles } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <Autocomplete
          inputProps={{ placeholder: "Add gear..." }}
          value={this.state.input}
          items={this.state.results}
          getItemValue={item => item.name}
          onChange={this.handleInputChange.bind(this)}
          onSelect={this.selectSuggestion.bind(this)}
          renderItem={(item, isHighlighted) => (
            <div key={item.name} className={isHighlighted ? styles.highlighted : styles.suggestion}>{item.name}</div>
          )}
        />

        <input className={styles.submit} type="submit" value="Add" />
      </form>
    );
  }
}
