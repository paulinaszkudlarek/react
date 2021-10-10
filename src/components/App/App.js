import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator';


class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    image: PropTypes.string,
  }

  static defaultProps = {
    image: listData.image,
  }

  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description: listData.description,
            image: listData.image,
            lists: []
          }
        ]
      }
    ))
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h1 className={styles.subtitle}>{pageContents.subtitle}</h1>
        <div className={styles.lists}>
          {this.state.lists.map(({key, ...listData}) => (
            <List key={key} {...listData} />
          ))}        
        </div>
        <div className={styles.Creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    )
  }
}

export default App;
