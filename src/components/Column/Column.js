import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';


const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}><span className={styles.icon}><Icon name={props.icon} /></span>{props.title}</h3>
    <div className={styles.cards}>
      {props.cards.map( cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}        
    </div>
    <div className={styles.Creator}>
      <Creator action={props.addCard} text={settings.cardCreatorText}  />
    </div>
  </section>
);

Column.propTypes = {
  cards: PropTypes.array,
  icon: PropTypes.string,
  title: PropTypes.string,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;