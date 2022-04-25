import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { PropTypes } from 'prop-types';

const SearchResults = props => (
  <section className={styles.component}>
    <h3 className={styles.title}><span className={styles.icon}>
      <Icon name={props.icon} /></span>Search results</h3>
    <div className={styles.cards}>
      {props.cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </div>
  </section>
);

SearchResults.propTypes = {
  cards: PropTypes.array,
  icon: PropTypes.string,
};

export default SearchResults;
