import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Faq from 'react-faq-component';
import styles from './FAQ.scss';

const FAQ = (props) => (
  <Container>
    <Hero titleText='FAQ' src={props.src} ></Hero>
    <Faq className={styles} config={config} data={settings.faq.list}></Faq>
  </Container>
);

const config = {
  tabFocus: true,
};

FAQ.propTypes = {
  titleText: PropTypes.string,
  src: PropTypes.string,
};

FAQ.defaultProps = {
  src: settings.defaultHeroImage,
};

export default FAQ;