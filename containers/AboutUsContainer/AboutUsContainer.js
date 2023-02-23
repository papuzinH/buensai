import Image from 'next/image';
import styles from './AboutUsContainer.module.css';
import AboutUsImage from '../../public/assets/imagen_aboutus.jpeg';

const AboutUsContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}><strong>Descubre</strong> un nuevo pasatiempo</h1>
        <p>
          Somos una empresa dedicada a la venta de bonsais de la más alta calidad.
          Nuestra pasión por los bonsais se remonta a más de 20 años atrás, cuando
          descubrimos la belleza y la tranquilidad que nos brindan estos árboles en miniatura.
          Desde entonces, hemos dedicado nuestro tiempo y esfuerzo a cultivar los mejores
          bonsais, con un cuidado especial en cada detalle para que lleguen a ser una obra de arte
          en tu hogar o jardín.
        </p>
        <p>
            Nuestro objetivo es que puedas disfrutar de la belleza de los bonsais
            y de la tranquilidad que te brindan, sin tener que dedicarle mucho tiempo
            a su cuidado. Por eso, te ofrecemos una amplia variedad de bonsais de
            diferentes especies, tamaños y precios, para que puedas elegir el que más
            se adapte a tus necesidades.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src={AboutUsImage}
          alt="Imagen de la empresa"
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
        />
      </div>
    </div>
  );
};

export default AboutUsContainer;
