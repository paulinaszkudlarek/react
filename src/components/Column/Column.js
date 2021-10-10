import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from './Icon.js';


class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    cards: PropTypes.array,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }

  render () {
    return (
      <secion className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon} /></span>{this.props.title}</h3>
        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}        
        </div>
        <div className={styles.Creator}>
          <Creator action={title => this.addCard(title)} text={settings.cardCreatorText}  />
        </div>

      </secion>
    )
  }
}

export default Column;