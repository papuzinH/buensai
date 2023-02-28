import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import elbuensai from '../../public/assets/elbuensai.png';
import grid from '../../styles/grid.module.css';

function SliderProduct(props) {
  return (
    <Carousel>
      {props.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SliderProduct;
