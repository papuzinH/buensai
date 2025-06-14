import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

function SliderProduct(props) {
  // Verificar que props.images existe y es un array
  if (!props.images || !Array.isArray(props.images) || props.images.length === 0) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          backgroundColor: '#f8f9fa',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6c757d',
          fontFamily: 'var(--font-body)',
        }}
      >
        <p>No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <Carousel
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 16px 40px rgba(107, 127, 90, 0.15)',
      }}
    >
      {props.images.map((image, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              backgroundColor: '#f8f9fa',
            }}
          >
            <Image
              src={image}
              alt={`Producto imagen ${index + 1}`}
              layout="fill"
              style={{
                objectFit: 'cover',
                borderRadius: '20px',
              }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SliderProduct;
