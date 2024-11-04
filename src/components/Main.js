import React from 'react';
import styled from 'styled-components';
import logo1 from '../imgs/bici.jpg';
import Header from '../components/Header';

const MainContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  min-height: 600px;
`;

const Content = styled.div`
  max-width: 600px;
  text-align: left;
  text-align: center;
  margin-top: 200px;
`;

const Title = styled.h1`
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
  width: 750px;
  height: auto;
`;

const Main = () => {
  return (
    <MainContainer id="inicio">
      <Header  />
      <Content>
        <Title>Safe<Highlight>Helmet</Highlight></Title>
        <Description>
          Safe Helmet está enfocado para solucionar diversas problemáticas que los ciclistas se enfrentan diariamente. Este producto combina la seguridad con la comodidad y la conectividad para ofrecer una experiencia única con la bicicleta.
        </Description>
      </Content>
      <HeroImage src={logo1} alt="Hero Image" />
    </MainContainer>
  );
};

export default Main;
