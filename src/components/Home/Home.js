import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js';
import {listData, settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator';


class Home extends React.Component {
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
        </div>
        <div className={styles.lists}>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </div>
        <div className={styles.Creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    );
  }
}

export default Home;
