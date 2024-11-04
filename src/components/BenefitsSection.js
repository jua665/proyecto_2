import React from 'react';
import styled from 'styled-components';
import logo1 from '../imgs/codigo.png'; 
import bici from '../imgs/casco.png';
import bici1 from '../imgs/ge.png';
import bici2 from '../imgs/ciclismo.png';

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
    { icon: bici1, title: 'Ojetivo', text: 'Proteger la vida del ciclista; Reducir el riesgo de lesiones graves en caso de accidente. Priorizando la protección de su seguridad física.' },
  ];

  return (
    <BenefitsContainer id="benefits">
      <br></br>
      <h2>Informacion de SafeHelmet</h2>
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

export default BenefitsSection;
