import React from 'react';
import { settings, info } from '../../data/dataStore.js';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero titleText={info.title} src={settings.defaultHeroImage}></Hero>
    <p>{info.content}</p>
  </Container>
);

export default Info;