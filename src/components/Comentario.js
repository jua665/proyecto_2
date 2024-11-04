import React from 'react';
import '../components/css/comentario.css';

const Comentario = ({ texto, autor, imagen, estrellas }) => {
  return (
    <div className="comentario">
      <p>{texto}</p>
      <div className="info">
        <img src={imagen} alt={`${autor} profile`} className="profile-pic" />
        <div className="autor-container">
          <div className="autor">{autor}</div>
          <div className="estrellas">
            {'⭐'.repeat(estrellas)}{'☆'.repeat(5 - estrellas)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comentario;
