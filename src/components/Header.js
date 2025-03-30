import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import logo from '../imgs/logo.png';
import safehel from '../imgs/safenuevo.png'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 13px 100px;
  background:rgb(255, 255, 255);
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

const NavContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const MobileNavContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-bottom: 15px;
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
    display: none;
  }
`;

const MobileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  
  ${ButtonLink} {
    width: 80%;
    max-width: 200px;
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
      
      <NavContainer>
        <Nav>
          <NavLink onClick={handleInicioClick} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</NavLink>
          <NavLink onClick={handleBenefitsClick} className={activeSection === 'benefits' ? 'active' : ''}>Informacion</NavLink>
          <NavLink onClick={handleCarouselClick} className={activeSection === 'carousel' ? 'active' : ''}>Carrusel</NavLink>
          <NavLink onClick={handleComentariotClick} className={activeSection === 'comentario' ? 'active' : ''}>Comentarios</NavLink>
        </Nav>
      </NavContainer>
      
      <ButtonContainer>
        <ButtonLink to="/login">Inicio de sesión</ButtonLink>
        <ButtonLink to="/register">Registro</ButtonLink>
      </ButtonContainer>
      
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </MenuButton>
      
      {/* Menú móvil */}
      <MobileNavContainer open={menuOpen}>
        <MobileNav>
          <NavLink onClick={handleInicioClick} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</NavLink>
          <NavLink onClick={handleBenefitsClick} className={activeSection === 'benefits' ? 'active' : ''}>Informacion</NavLink>
          <NavLink onClick={handleCarouselClick} className={activeSection === 'carousel' ? 'active' : ''}>Carrusel</NavLink>
          <NavLink onClick={handleComentariotClick} className={activeSection === 'comentario' ? 'active' : ''}>Comentarios</NavLink>
        </MobileNav>
        <MobileButtonContainer>
          <ButtonLink to="/login">Inicio de sesión</ButtonLink>
          <ButtonLink to="/register">Registro</ButtonLink>
        </MobileButtonContainer>
      </MobileNavContainer>
    </HeaderContainer>
  );
};

export default Header;