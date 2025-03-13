import React from 'react';
import styled from 'styled-components';
// import logo1 from '../imgs/bicis.png';
import Header from '../components/Header';
import Footer from './Footer';
import Encabezado from './Encabezado';
import BenefitsSection from './BenefitsSection'
import ImageCarousel from './ImageCarousel'
import Comentarios from './Comentarios'


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
