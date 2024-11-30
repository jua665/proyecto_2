import React from 'react';
import styled from 'styled-components';
import Header2 from '../components/Header2';
import logo1 from '../imgs/codigo.png';
import bici from '../imgs/casco.png';
import bici1 from '../imgs/ge.png';
import bici2 from '../imgs/ciclismo.png';
import HeroImageSrc from '../imgs/bici.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comentarios from './Comentarios';
import Footer from '../components/Footer';
import GoogleMap from './GoogleMap';
import { useUser } from '../userContext';
import CyclingStats from './CyclingStats'; // Importa el nuevo componente
import UserTable from './UserTable';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column; /* Cambia la dirección a columna */
  align-items: center; /* Centra los items horizontalmente */
  justify-content: flex-start; /* Coloca el contenido en la parte superior */
  padding: 20px;
  background-color: #fff;
  min-height: 600px;
`;

const Content = styled.div`
  max-width: 600px;
  text-align: center; /* Centra el texto y el botón */
  margin-top: 50px; /* Ajusta el margen superior si es necesario */
`;

const MainTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #000;
`;

const Highlight = styled.span`
  color: #FF5722; /* Color naranja */
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
`;

const HeroImage = styled.img`
  width: 750px; /* Mantiene el tamaño original */
  height: auto;
  margin-top: 20px; /* Ajusta el margen superior si es necesario */
`;

const BenefitsContainer = styled.section`
  padding: 70px 20px;
  background: #f5f5f5;
  text-align: center;
  color: #000;
`;

const BenefitsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BenefitCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #fff;
  color: #000;
  text-align: center;
`;

const BenefitImage = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 10px;
`;

const BenefitText = styled.div`
  flex: 1;
`;

const BenefitsSection = () => {
  const benefits = [
    { icon: logo1, title: 'Lenguaje', text: 'El lenguaje de programación para el desarrollo de Safe Helmet es JavaScript, utilizando React Native/React como framework; y el gestor de bases de datos MongoDB.' },
    { icon: bici2, title: 'Necesidad', text: 'La principal necesidad del ciclista es su propia seguridad; Para ello, es importante salvaguardar su bienestar en todo momento, utilizando tecnología enfocada a proteger su integridad física.' },
    { icon: bici, title: 'Justificación', text: 'Este producto se crea con el fin de revolucionar el mercado actual de los cascos de ciclismo, ofreciendo ventajas competitivas que los cascos tradicionales no tienen.' },
    { icon: bici1, title: 'Objetivo', text: 'Proteger la vida del ciclista; Reducir el riesgo de lesiones graves en caso de accidente. Priorizando la protección de su seguridad física.' },
  ];

  return (
    <BenefitsContainer id="benefits">
      <h2>Información de SafeHelmet</h2>
      <BenefitsWrapper>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index}>
            <BenefitImage src={benefit.icon} alt={benefit.title} />
            <h3>{benefit.title}</h3>
            <BenefitText>{benefit.text}</BenefitText>
          </BenefitCard>
        ))}
      </BenefitsWrapper>
    </BenefitsContainer>
  );
};

const CarouselContainer = styled.div`
  max-width: 1250px;
  margin: 40px auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .carousel-item img {
    width: 100%;
    max-height: auto;
    object-fit: cover;
    border-radius: 15px;
  }

  .carousel-caption {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
  }
`;

const CarouselTitleContainer = styled.div`
  text-align: center;
  margin: 40px auto;
`;

const CarouselTitle = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h4`
  font-size: 1.2em;
  color: #666;
`;

const CarouselComponent = () => {
  return (
    <CarouselContainer id="carousel">
      <CarouselTitleContainer>
        <CarouselTitle>Funciones del Sistema</CarouselTitle>
        <Subtitle>A pesar de la similitud de los componentes con algunos otros cascos inteligentes,</Subtitle>
        <Subtitle>el principal diferenciador de Safe Helmet es el diseño aerodinámico del casco y tener su propia aplicación móvil.</Subtitle>
      </CarouselTitleContainer>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://journey.app/blog/wp-content/uploads/2022/07/casco-para-ciclismo.jpg"
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
            src="https://webrun.com.br/wp-content/uploads/2020/08/dia-do-ciclismo-feed-2381293-1200x800.jpeg"
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
            src="https://www.entrenamiento.com/wp-content/uploads/2015/03/ciclismo-scaled.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Tercera función</h5>
            <p>Uso de sensores para mejorar significativamente la experiencia del usuario y la seguridad.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

const ButtonContainer = styled.div`
  border-radius: 20px;
  margin-top: 20px;
  text-align: center;
`;

const BackupButton = styled.button`
  background-color: #FF5722;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
`;

const Inicio = () => {
  const { user } = useUser();

  const handleBackup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/backup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'backup.json'; // Nombre del archivo a descargar
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        alert('Backup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <>
      <Header2 />
      <MainContainer id="inicio">
  <Content>
    <br></br>
    <br></br>
    <MainTitle>Safe<Highlight>Helmet</Highlight></MainTitle>
    <Description>
      Safe Helmet está enfocado para solucionar diversas problemáticas que los ciclistas se enfrentan diariamente. Este producto combina la seguridad con la comodidad y la conectividad para ofrecer una experiencia única con la bicicleta.
    </Description>
    <ButtonContainer>
      {user?.role === 'admin' && <BackupButton onClick={handleBackup}>Respaldar</BackupButton>}
    </ButtonContainer>
  </Content>
  {user?.role === 'admin' && <HeroImage src={HeroImageSrc} alt="Hero Image" />}
  
  {/* Solo renderizar si el rol NO es "admin" */}

  
  <br></br>
  <br></br>
</MainContainer>

      
      <BenefitsSection />
      <CarouselComponent />
      <CyclingStats/>
    
      <Comentarios />
      <br/>
      <br/>
      {user?.role === 'admin' &&  <CyclingStats/>}
      {user?.role === 'admin' && <UserTable/>}
      <Footer />
    </>
  );
};

export default Inicio;
