import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

function SliderProduct(props) {
  return (
    <Carousel>
      {props.images.map((image, index) => (
        <Carousel.Item key={index}>
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image src={image} alt="slide" fill style={{ objectFit: 'cover' }} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SliderProduct;
