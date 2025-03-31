import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../imgs/safenuevo.png';
import PayPalButton from './PayPalButton';

// Estilos
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 13px 100px;
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 13px 20px;
  }
`;

const Logo = styled.img`
  height: 45px;
  width: auto;
`;

const NavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 20px;
    align-items: flex-start;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;

  &:hover {
    color: #FF5722;
  }

  &.active {
    color: #FF5722;
  }
`;

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  min-width: 100px;
  max-width: 150px;
  border-radius: 12px;
  border: 2px solid #fff;
  background-color: #000;
  color: rgb(255, 255, 255) !important;
  text-transform: none;
  font-size: 0.9em;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #FF5722;
    color: white !important;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? 'none' : 'flex')}; /* Oculta en móvil cuando el menú está abierto */
    flex-direction: column;
    gap: 8px;
    margin-top: 15px;
  }
`;


const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ModalTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 1.25em;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  background-color: ${({ confirm }) => (confirm ? '#FF5722' : '#ddd')};
  color: ${({ confirm }) => (confirm ? '#fff' : '#333')};
  cursor: pointer;
  margin: 10px;
  font-size: 1em;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ confirm }) => (confirm ? '#e64a19' : '#ccc')};
    color: ${({ confirm }) => (confirm ? '#fff' : '#333')};
  }
`;

const WelcomeMessage = styled.div`
  background-color: #e0f7fa;
  color: #00796b;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 60px;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Header2 = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalPayPal, setShowModalPayPal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    setUserEmail(email || '');

    const handleScroll = () => {
      const sections = ['inicio', 'carousel', 'benefits', 'comentario'];
      let found = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            found = section;
          }
        }
      });
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInicioClick = () => {
    const inicioSection = document.getElementById('inicio');
    if (inicioSection) {
      inicioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const handleComentariotClick = () => {
    const comentarioSection = document.getElementById('comentario');
    if (comentarioSection) {
      comentarioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const handleCarouselClick = () => {
    const carouselSection = document.getElementById('carousel');
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const handleBenefitsClick = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handlePayPalClick = () => {
    setShowModalPayPal(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setShowModal(false);
    navigate('/');
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  const handleClosePayPalModal = () => {
    setShowModalPayPal(false);
  };

  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="SafeHelmet Logo" />
        
        <NavWrapper>
          <Nav open={menuOpen}>
            <NavLink onClick={handleInicioClick} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</NavLink>
            <NavLink onClick={handleBenefitsClick} className={activeSection === 'benefits' ? 'active' : ''}>Informacion</NavLink>
            <NavLink onClick={handleCarouselClick} className={activeSection === 'carousel' ? 'active' : ''}>Carrusel</NavLink>
            <NavLink onClick={handleComentariotClick} className={activeSection === 'comentario' ? 'active' : ''}>Comentarios</NavLink>
            
            {/* Botones solo visibles en mobile dentro del menú desplegable */}
            {menuOpen && (
              <ButtonContainer>
                <ButtonLink onClick={handleLogoutClick}>Cerrar sesión</ButtonLink>
                <ButtonLink onClick={handlePayPalClick}>Donaciones</ButtonLink>
              </ButtonContainer>
            )}
          </Nav>
        </NavWrapper>
        
        {/* Botones visibles en desktop */}
        <ButtonContainer menuOpen={menuOpen}>
  <ButtonLink onClick={handleLogoutClick}>Cerrar sesión</ButtonLink>
  <ButtonLink onClick={handlePayPalClick}>Donaciones</ButtonLink>
</ButtonContainer>

        
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </MenuButton>
      </HeaderContainer>

      {showWelcome && <WelcomeMessage>¡Bienvenido a nuestro sitio web!</WelcomeMessage>}

      <Modal show={showModal}>
        <ModalTitle>¿Estás seguro de que deseas cerrar sesión?</ModalTitle>
        <p>{userEmail}</p>
        <div>
          <ModalButton confirm onClick={handleConfirmLogout}>Confirmar</ModalButton>
          <ModalButton onClick={handleCancelLogout}>Cancelar</ModalButton>
        </div>
      </Modal>

      <Modal show={showModalPayPal}>
        <ModalTitle>Proceso de pago con PayPal</ModalTitle>
        <PayPalButton />
        <ModalButton onClick={handleClosePayPalModal}>Cerrar</ModalButton>
      </Modal>
    </>
  );
};

export default Header2;