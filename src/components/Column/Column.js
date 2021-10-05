import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    columnTitleOne: PropTypes.string,
    columnTitleTwo: PropTypes.string,
    columnTitleThree: PropTypes.string,
  }

  render () {
    return (
      <secion className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </secion>
    )
  }
}

export default Column;