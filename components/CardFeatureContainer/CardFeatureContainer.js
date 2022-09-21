import React from 'react';
import { useState } from 'react';
import CardFeature from '../CardFeature/CardFeature';
import styles from './CardFeatureContainer.module.css';
import grid from '../../styles/grid.module.css';

const CardFeatureContainer = () => {
  const [cardsFeature, setCardsFeature] = useState(['Destacados', 'Nuevos Bonsais', 'Descuentos']);
  const showCardsFeature = () => {
    return cardsFeature.map((card, index) => <CardFeature key={index} text={card} />);
  };
  return (
    <div className="inner">
      <div className={`${styles.cardsFeatureContainer} ${grid.grid}`}>{showCardsFeature()}</div>
    </div>
  );
};

export default CardFeatureContainer;
