import React from 'react';
import { settings } from '../../data/dataStore.js';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} src={settings.defaultHeroImage}></Hero>
    <p>{settings.info.content}</p>
  </Container>
);

export default Info;