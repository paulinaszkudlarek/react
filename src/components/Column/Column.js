import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import { settings } from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';


class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render () {
    const {icon, title, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>
        <div className={styles.cards}>
          {cards.map( cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}        
        </div>
        <div className={styles.Creator}>
          <Creator action={addCard} text={settings.cardCreatorText}  />
        </div>
      </section>
    );
  }
}

export default Column;