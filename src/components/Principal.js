import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Main from '../components/Main';
import Comments from '../components/Comentarios';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Verificar from '../components/Verificar';
import Reset from '../components/Reset';
import Recuperarcontra from '../components/Recuperarcontra';
import Register from '../components/Register';
import Info from '../components/BenefitsSection'
import Carrusel from '../components/ImageCarousel'
import Principal from '../components/Principal'

const App = () => {
  return (
      <Router>
        <MainLayout />
      </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  // const isAuthRoute = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/recuperar contraseña';

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Info/>
            <Carrusel/>
            <Comments />
            <Footer/>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperar contraseña" element={<Recuperarcontra />} />
        <Route path="/verificar" element={<Verificar />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </>
  );
};

export default App;