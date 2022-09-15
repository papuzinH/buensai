import React from 'react';
import styles from './Features.module.css';
import CardFeature from '../CardFeatures/CardFeatures';
import ItemBenefits from '../ItemBenefits/itemBenefits';

import Image from 'next/image';
import bonsai from '../../public/assets/bonsaifeature.png';

const Features = ({ dataItems }) => (
  <>
    <div className={`${styles['features_container']}`}>
      <div className={`${styles['content']}`}>
        <CardFeature />
        <CardFeature />
        <CardFeature />

        <h2 className={`${styles['section_title']}`}>
          Conocé los beneficios de <span>nuestras plantas</span>
        </h2>

        <p className={`${styles['descrip']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et quam et sapien
          rutrum mattis at sit amet purus. Fusce sed odio magna. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Donec ut arcu neque.
        </p>

        {dataItems.map((item) => {
          return (
            <ItemBenefits icon={item.icon} title={item.title} text={item.text} key={item.id} />
          );
        })}
      </div>

      <Image className={`${styles['bonsaimg']}`} src={bonsai} alt="Bonsai Features"></Image>
    </div>
    <button className={`${styles['btn']}`}>Ver bonsais</button>
  </>
);

export default Features;