import React from 'react';
import './css/footer.css';
import HeroImageSrc from '../imgs/ciclismo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

// Estilos para los componentes
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color:  #f5f5f5;
  gap: 20px;
  flex-wrap: wrap; /* Esto asegura que en pantallas pequeñas, los elementos se apilen */
`;

const Content = styled.div`
  max-width: 600px;
  text-align: left;
`;

const MainTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #FF5722;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #555;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const BackupButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #FF5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #E64A19;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 590px;
  height: auto;
  border-radius: 10px; /* Opcional: bordes redondeados */
`;

// Componente principal
const Encabezado = ({ user, handleBackup }) => {
  return (
    <MainContainer id="inicio">
      <Content>
        <MainTitle>
          Safe<Highlight>Helmet</Highlight>
        </MainTitle>
        <Description>
          Safe Helmet está enfocado para solucionar diversas problemáticas que los ciclistas se enfrentan diariamente. Este producto combina la seguridad con la comodidad y la conectividad para ofrecer una experiencia única con la bicicleta.
        </Description>
        <ButtonContainer>
          {user?.role === 'admin' && <BackupButton onClick={handleBackup}>Respaldar</BackupButton>}
        </ButtonContainer>
      </Content>
      <HeroImage src={HeroImageSrc} alt="Hero Image" />
    </MainContainer>
  );
};

export default Encabezado;
