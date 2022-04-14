import React from 'react';
import { settings, faq } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} src={settings.defaultHeroImage} ></Hero>
    <Accordion defaultActiveKey="0" flush className={styles.component} >
      {faq.list.rows.map(function(row){
        return ( 
          <Accordion.Item key={row.key} eventKey={row.key}>
            <Accordion.Header>{row.title}</Accordion.Header>
            <Accordion.Body>{row.content}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  </Container>
);

FAQ.propTypes = {
  titleText: PropTypes.string,
  src: PropTypes.string,
  key: PropTypes.string,
};

FAQ.defaultProps = {
  src: settings.defaultHeroImage,
};

export default FAQ;