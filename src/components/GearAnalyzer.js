import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from 'style/gear-analyzer.scss';

@cssModules(styles)
export default class GearAnalyzer extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles } = this.props;

    return (
      <div className={styles.container}>
        <object className={styles.backpack} data="http://image000.flaticon.com/icons/svg/140/140641.svg" />
        <h1 className={styles.h1}>Start making your first gear list!</h1>
      </div>
    );
  }
}
