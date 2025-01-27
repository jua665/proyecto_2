import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// Estilos con styled-components
const CarouselContainer = styled.div`
  max-width: 1100px; /* Ajusta el tamaño según lo necesario */
  margin: 20px auto; /* Centra el carrusel horizontalmente y agrega margen */
  border-radius: 15px; /* Bordes redondeados */
  overflow: hidden; /* Asegura que las imágenes no se salgan de los bordes redondeados */
  

  .carousel-item img {
    width: 100%; /* Asegura que las imágenes ocupen todo el ancho del contenedor */
    max-height: 560px; /* Limita la altura máxima de las imágenes */
    object-fit: cover; /* Ajusta las imágenes dentro del contenedor sin distorsión */
    border-radius: 15px; /* Bordes redondeados para las imágenes */
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.79); /* Fondo semi-transparente */
    border-radius: 10px; /* Bordes redondeados */
    padding: 10px; /* Espaciado interno */
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
  background-color:  #f5f5f5;
`;

const CarouselComponent = () => {
  return (
      <MainContainer>
      <CarouselContainer id="carousel">
        <TitleContainer  >
          <Title>Funciones del Sistema</Title>
          <Subtitle>A pesar de la similitud de los componentes con algunos otros cascos inteligentes,</Subtitle>
          <Subtitle>el principal diferenciador de Safe Helmet es el diseño aerodinámico del casco y tener su propia aplicación móvil.</Subtitle>
        </TitleContainer>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://journey.app/blog/wp-content/uploads/2022/07/casco-para-ciclismo.jpg" // URL de la imagen del primer slide
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Primera función</h5>
              <p>Detección y medición de la severidad del impacto para proteger al usuario.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://webrun.com.br/wp-content/uploads/2020/08/dia-do-ciclismo-feed-2381293-1200x800.jpeg" // URL de la imagen del segundo slide
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Segunda función</h5>
              <p>Notificaciones en tiempo real con respuesta inmediata a su contacto de emergencia.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.entrenamiento.com/wp-content/uploads/2015/03/ciclismo-scaled.jpg" // URL de la imagen del tercer slide
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Tercera función</h5>
              <p>Uso de sensores para mejorar significativamente la experiencia del usuario y la seguridad.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselContainer>
      </MainContainer>
  );
}

export default CarouselComponent;
