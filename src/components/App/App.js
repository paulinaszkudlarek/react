import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info.js';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQ.js';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.module.scss';
import List from '../List/ListContainer';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch 
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 1 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:id' component={SearchResultsContainer} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;