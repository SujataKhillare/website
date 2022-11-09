import React from 'react';
import { Carousel } from 'react-bootstrap';



const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/dark-food-photography-still-life.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/02/92/59/09/360_F_292590953_YQZTFus1hJhOLVxB9skhTx2TtIBvGCaf.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?b=1&k=20&m=1165399909&s=170667a&w=0&h=Avt2tZq-dpx4w602UqZJuk7Sog9S4-TfD7V0GwBVu6M="
          alt=""
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;