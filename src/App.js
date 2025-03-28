import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/Main';
import Verificar from './components/Verificar';
import Reset from './components/Reset';
import Recuperarcontra from './components/Recuperarcontra';
import Header2  from './components/Header2'
import Inicio from './components/Inicio';
import Login from './components/Login';
import Register from './components/Register';
import { UserProvider } from './userContext';
import ProtectedRoute  from './components/ProtectedRoute'
import EliminarCuenta from './components/EliminarCuenta';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';

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
  // const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      
      <Routes>
        <Route path="/" element={
          <>
          <Main/>    
            </>
        } />
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperar contraseña" element={<Recuperarcontra />} />
        <Route path="/verificar" element={<Verificar />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/header2" element={<Header2/>} />
        <Route path="/inicio" element={  <ProtectedRoute><Inicio/></ProtectedRoute>} />
        <Route path="/politica" element={<PoliticaPrivacidad />} />
        <Route path="/eliminar" element={<EliminarCuenta />} />
      </Routes>
      
    </>
  );
};

export default App;
