import React from 'react';
import Header2 from './components/Header2';
import Main from './components/Main';
import {useNavigate } from "react-router-dom";
import Comments from './components/Comments';
import Footer from './components/Footer';
import { useUser } from './userContext';

const Logueado = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const logout = () =>{
localStorage.removeItem('token');
console.log('se fue',localStorage.getItem('token'))
navigate('/',); // Redirigir a la página de inicio

  }
console.log('llego',localStorage.getItem('token'))


  const handleBackup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/backup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        alert('Backup successful!');
      } else {
        alert('Backup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  if (!user) {
    return <div><button onClick={logout}>Cerrar sesion</button></div>;
  }

  return (
    <>
      <Header2 />
      <div>
        <h1>Welcome to the app!</h1>
        {user.role === 'admin' && <button onClick={handleBackup}>Admin Button</button>}

    <button onClick={logout}>Cerrar sesion</button>
        
      </div>
      <Main />
      <Comments />
      <Footer />
    </>
  );
};

export default Logueado;
