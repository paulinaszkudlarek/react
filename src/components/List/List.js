import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {

  //this.props - ten obiekt jest domyślny i zawiera wszystkie właściwości instancji List
  //this.props.columns - columns wymyślamy sami
  state = {
    columns: this.props.columns || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} src={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}        
        </div>
        <div className={styles.Creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
        </div>
      </section>
    )
  }
}

export default List;
