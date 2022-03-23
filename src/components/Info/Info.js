import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';

const Info = () => (
  <Container>
    <h2>{settings.info.title}</h2>
    <p>{settings.info.content}</p>
  </Container>
);

export default Info;