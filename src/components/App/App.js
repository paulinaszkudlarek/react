import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import {listData, settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator';
import Search from '../Search/SearchContainer'; 


class App extends React.Component {
  state = {
    lists: this.props.lists || [listData],
  }
  
  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    description: PropTypes.node,
    image: PropTypes.string,
  }

  static defaultProps = {
    image: listData.image,
    title: listData.title,
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
            lists: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.subtitle}>{subtitle}</h1>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.lists}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </div>
        <div className={styles.Creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default App;
