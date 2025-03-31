import React from 'react';
import styled from 'styled-components';
import Header2 from '../components/Header2';
import logo1 from '../imgs/codigo.png';
import bici from '../imgs/casco.png';
import bici1 from '../imgs/ge.png';
import bici2 from '../imgs/ciclismo.png';
// import HeroImageSrc from '../imgs/bicis.png';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comentarios from './Comentarios';
import Footer from '../components/Footer';
import Encabezado from '../components/Encabezado'
// import GoogleMap from './GoogleMap';
import { useUser } from '../userContext';
import CyclingStats from './CyclingStats'; // Importa el nuevo componente
import UserTable from './UserTable';
import ImageCarousel from './ImageCarousel'

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
      const response = await fetch('https://servertest-tnt7.onrender.com/api/users/backup', {
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
      <Encabezado/>
      <BenefitsSection />
      <ImageCarousel />
      <CyclingStats />
      <Comentarios />
      <br/>
      <br/>
    
      {user?.role === 'admin' && <UserTable/>}
      <Footer />
    </>
  );
};

export default Inicio;
