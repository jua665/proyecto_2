import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../imgs/logo.png';
import PayPalButton from './PayPalButton'; // Importa el botón de PayPal

// Estilos
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #FF5722;
  }

  &.active {
    color: #FF5722;
  }
`;

const ButtonLink = styled.button`
  padding: 5px 10px;
  border-radius: 20px;
  border: 2px solid #FF5722;
  background-color: transparent;
  color: #FF5722 !important;
  text-transform: none;
  font-size: 1em;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #FF5722;
    color: white !important;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    margin-left: 0;
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

// Nuevo estilo para el mensaje de bienvenida
const WelcomeMessage = styled.div`
  background-color: #e0f7fa;
  color: #00796b;
  padding: 20px; /* Aumenta el padding para mayor tamaño */
  text-align: center;
  position: fixed;
  top: 60px; /* Ajusta según la altura de tu barra de navegación */
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Asegúrate de que esté debajo del header */
`;

// Cambia la duración del mensaje de bienvenida aquí
const Header2 = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalPayPal, setShowModalPayPal] = useState(false); // Nuevo estado para PayPal modal
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
    }, 5000); // El mensaje estará visible por 5 segundos

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
    setShowModalPayPal(true); // Abrir modal de PayPal
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setShowModal(false);
    navigate('/'); // Redirigir a la página de inicio
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  const handleClosePayPalModal = () => {
    setShowModalPayPal(false); // Cerrar modal de PayPal
  };

  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="SafeHelmet Logo" />
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </MenuButton>
        <Nav open={menuOpen}>
          <NavLink onClick={handleInicioClick} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</NavLink>
          <NavLink onClick={handleBenefitsClick} className={activeSection === 'benefits' ? 'active' : ''}>Informacion</NavLink>
          <NavLink onClick={handleCarouselClick} className={activeSection === 'carousel' ? 'active' : ''}>Carrusel</NavLink>
          <NavLink onClick={handleComentariotClick} className={activeSection === 'comentario' ? 'active' : ''}>Comentarios</NavLink>
        </Nav>
        <ButtonContainer>
          <ButtonLink onClick={handleLogoutClick}>Cerrar sesión</ButtonLink>
          <ButtonLink onClick={handlePayPalClick}>Donaciones</ButtonLink> {/* Botón para abrir modal de PayPal */}
        </ButtonContainer>
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

      {/* Modal para PayPal */}
      <Modal show={showModalPayPal}>
        <ModalTitle>Proceso de pago con PayPal</ModalTitle>
        <PayPalButton /> {/* Aquí integras tu botón de PayPal */}
        <ModalButton onClick={handleClosePayPalModal}>Cerrar</ModalButton>
      </Modal>
    </>
  );
};

export default Header2;
