import React from 'react';
import styles from './features.module.css';
import ItemBenefits from '../ItemBenefits/ItemBenefits';
import Image from 'next/image';
import bonsai from '../../public/assets/bonsaifeature.png';
import CardFeatureContainer from '../../containers/CardFeatureContainer/CardFeatureContainer';
import BackgroundEffects from '../BackgroundEffects/BackgroundEffects';
import grid from '../../styles/grid.module.css';
import { useRouter } from 'next/router';

const Features = ({ dataItems }) => {
  const router = useRouter();
  
  return (
    <>
      <div id="features" className={`${styles['features_section']}`}>
        <BackgroundEffects variant="features" />
        <CardFeatureContainer />
        <div className="inner">
          <div className={`${grid['grid']}`}>
            <div className={`${styles.features_container} ${grid.col_8}`}>
              <div className={`${styles['content']}`}>
                <h2 className={`${styles['section_title']}`}>
                  Conocé los beneficios de <span>nuestras plantas</span>
                </h2>

                <p className={`${styles['descrip']}`}>
                  En Buensai te ofrecemos la posibilidad de llevar a tu hogar u oficina un pedacito
                  de naturaleza con numerosos beneficios para tu bienestar. Con una gran variedad de
                  especies y estilos, en Buensai encontrarás el bonsái perfecto para ti. Descubre
                  nuestra amplia selección y llévate a casa un compañero de vida que te aportará
                  satisfacción y tranquilidad.
                </p>

                {dataItems.map((item) => {
                  return (
                    <ItemBenefits
                      icon={item.icon}
                      title={item.title}
                      text={item.text}
                      key={item.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button
          className={`${styles['btn']}`}
          onClick={() => {
            router.push('/products');
          }}
        >
          Ver bonsais
        </button>
        <div className={`${styles['bonsaimg']}`}>
          <Image src={bonsai} alt="Bonsai Features"></Image>
        </div>
      </div>
    </>
  );
};

export default Features;
