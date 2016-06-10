import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ui from 'redux-ui';
import cssModules from 'react-css-modules';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AddGearForm from '../components/AddGearForm';
import GearList from '../components/GearList';
import GearListList from '../components/GearListList';
import * as GearListActions from '../actions/gearList';
import wrapActionCreators from '../utils/wrapActionCreators';
import styles from '../style/common.css';

@connect(state => ({
  gearList: state.gearList
}), wrapActionCreators(GearListActions))
@ui({ key: 'addGearPage' })
@cssModules(styles)
export default class AddGearPage extends Component {
  static propTypes = {
    gearList: PropTypes.array.isRequired,
    addGearItem: PropTypes.func.isRequired,
    getGearListSuggestions: PropTypes.func.isRequired
  };

  render() {
    const { gearList, addGearItem, getGearListSuggestions } = this.props;

    return (
      <Grid>
        <Row>
          <Col xs={3} md={3} className={styles.container}>
            <GearListList />
          </Col>

          <Col xs={6} md={9} className={styles.container}>
            <AddGearForm
              addGearItem={addGearItem}
              getGearListSuggestions={getGearListSuggestions}
            />

            <GearList items={gearList} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
