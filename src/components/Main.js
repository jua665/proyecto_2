import React from 'react';
import styled from 'styled-components';
import logo1 from '../imgs/bicis.png';
import Header from '../components/Header';
import Footer from './Footer';
import Encabezado from './Encabezado';
import BenefitsSection from './BenefitsSection'
import ImageCarousel from './ImageCarousel'
import Comentarios from './Comentarios'

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
  color:rgb(0, 0, 0); /* Color naranja */
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
    <>
      <Header/>
      <Encabezado/>
      <BenefitsSection />
      <ImageCarousel/>
      <Comentarios/>
      <Footer/>
    </>
  );
};

export default Main;
