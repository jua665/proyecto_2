  import React, { useState, useEffect } from 'react';
  import styled from 'styled-components';
  import { Link } from 'react-router-dom';
  import logo from '../imgs/logo.png';
  import safehel from '../imgs/safenuevo.png'

  const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 13px 100px;
    background:rgb(255, 255, 255); /* Cambia este color */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    justify-content: space-between;
  `;

  const Logo = styled.img`
    height: 45px;
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
      padding: 20px;
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
    padding: 8px 16px; /* Ajusta el relleno para que los botones sean más compactos */
    min-width: 100px; /* Define un ancho mínimo menor */
    max-width: 150px; /* Define un ancho máximo para evitar que crezcan demasiado */
    border-radius: 12px; /* Ajusta las esquinas redondeadas si lo deseas */
    border: 2px solid #fff;
    background-color: #000;
    color: rgb(255, 255, 255) !important;
    text-transform: none;
    font-size: 0.9em; /* Reduce un poco el tamaño del texto */
    transition: background-color 0.3s ease, color 0.3s ease;
    text-decoration: none;

    &:hover {
      background-color: #FF5722;
      color: white !important;
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
    gap: 10px; /* Reduce el espacio entre los botones */
    margin-left: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 8px; /* Reduce el espacio en pantallas pequeñas */
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

  const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
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

    return (
      <HeaderContainer>
        <Logo src={safehel} alt="SafeHelmet Logo" />
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
          <ButtonLink to="/login">Inicio de sesión</ButtonLink>
          <ButtonLink to="/register">Registro</ButtonLink>
        </ButtonContainer>
      </HeaderContainer>
    );
  };

  export default Header;
