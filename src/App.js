import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/Main';
import Comments from './components/Comentarios';
import Verificar from './components/Verificar';
import Reset from './components/Reset';
import Recuperarcontra from './components/Recuperarcontra';
import Info from './components/BenefitsSection'
import Carrusel from './components/ImageCarousel'
import Header2  from './components/Header2'
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { UserProvider } from './userContext';
import ProtectedRoute  from './components/ProtectedRoute'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <MainLayout />
      </Router>
    </UserProvider>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Info />
            <Carrusel />
            <Comments />
            <Footer/>         
            </>
        } />
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperar contraseña" element={<Recuperarcontra />} />
        <Route path="/verificar" element={<Verificar />} />
        <Route path="/reset/:token" element={<Reset />} />
        <Route path="/header2" element={<Header2/>} />
        <Route path="/inicio" element={  <ProtectedRoute><Inicio/></ProtectedRoute>} />
      </Routes>
      
    </>
  );
};

export default App;
