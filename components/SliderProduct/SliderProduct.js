import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import elbuensai from '../../public/assets/elbuensai.png';
import grid from '../../styles/grid.module.css';

function SliderProduct(props) {
  return (
    <Carousel>
      {/* {props.images.map((image) => (
        <Carousel.Item>
          <img className="d-block w-100" src={props.image} alt="slide" />
        </Carousel.Item>
      ))} */}
      <Carousel.Item>
        <img className="d-block w-100" src={props.image} alt="slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.image} alt="slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderProduct;
