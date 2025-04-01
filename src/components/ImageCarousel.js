import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// Importar imágenes locales
import img1 from '../imgs/imagen1.jpg';
import img2 from '../imgs/imagen2.jpeg';
import img3 from '../imgs/imagen3.webp';

// Estilos con styled-components
const CarouselContainer = styled.div`
  max-width: 1100px;
  margin: 20px auto;
  border-radius: 15px;
  overflow: hidden;

  .carousel-item img {
    width: 100%;
    max-height: 560px;
    object-fit: cover;
    border-radius: 15px;
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.79);
    border-radius: 10px;
    padding: 10px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h4`
  font-size: 1em;
  color: #666;
`;

const MainContainer = styled.div`
  background-color: #f5f5f5;
`;

const CarouselComponent = () => {
  return (
    <MainContainer>
      <CarouselContainer id="carousel">
        <TitleContainer>
          <Title>Funciones del Sistema</Title>
          <Subtitle>A pesar de la similitud de los componentes con algunos otros cascos inteligentes,</Subtitle>
          <Subtitle>el principal diferenciador de Safe Helmet es el diseño aerodinámico del casco y tener su propia aplicación móvil.</Subtitle>
        </TitleContainer>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h5>Primera función</h5>
              <p>Detección y medición de la severidad del impacto para proteger al usuario.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h5>Segunda función</h5>
              <p>Notificaciones en tiempo real con respuesta inmediata a su contacto de emergencia.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h5>Tercera función</h5>
              <p>Uso de sensores para mejorar significativamente la experiencia del usuario y la seguridad.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
    </MainContainer>
  );
};

export default CarouselComponent;