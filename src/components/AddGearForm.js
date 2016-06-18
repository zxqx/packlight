import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';
import cssModules from 'react-css-modules';
import ui from 'redux-ui';
import throttle from 'lodash.throttle';
import styles from 'style/add-gear-form.scss';

@cssModules(styles)
@ui({
  state: {
    input: '',
    selection: null,
    suggestions: []
  }
})
export default class AddGearForm extends Component {
  static propTypes = {
    styles: PropTypes.object,
    gearList: PropTypes.object.isRequired,
    addGearItem: PropTypes.func.isRequired,
    getGearListSuggestions: PropTypes.func.isRequired
  };

  componentDidMount() {
    this._getGearListSuggestions = throttle(this.getGearListSuggestions.bind(this), 400);
  }

  handleInputChange(e, input) {
    this.props.updateUI({ input });
    if (!input) return;

    this._getGearListSuggestions(input);
  }

  selectSuggestion(input) {
    const selection = this.props.ui.suggestions.find(r => r.name === input);
    this.props.updateUI({ input, selection });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { gearList } = this.props;
    const { selection } = this.props.ui;
    if (!selection) return;

    this.props.addGearItem({ item: selection, gearList });
    this.props.resetUI();
  }

  async getGearListSuggestions(input) {
    const suggestions = await this.props.getGearListSuggestions(input);
    this.props.updateUI({ suggestions });
  }

  render() {
    const { styles, ui } = this.props;

    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit.bind(this)}>
        <Autocomplete
          inputProps={{ placeholder: 'Add gear...' }}
          ref="autocomplete"
          value={ui.input}
          items={ui.suggestions}
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
