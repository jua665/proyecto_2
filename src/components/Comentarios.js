// Comentarios.js
import React from 'react';
import Slider from 'react-slick';
import Comentario from './Comentario';
import ben from '../imgs/ben 10.jpg';
import marta from '../imgs/marta.jpg'
import pablo from '../imgs/pablo.jpg'
import messi from '../imgs/messi.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../components/css/comentarios.css'; // Importar el archivo CSS



const Comentarios = () => {

  const comentarios = [
    { texto: 'La página es muy buena ya que aporta información acerca de mi ubicación', autor: 'Pablo', imagen: pablo, estrellas: 4 },
    { texto: 'Me gusta la aplicación me siento más seguro sabiendo que pueden notificar a mis familiares', autor: 'Marta', imagen: marta, estrellas: 5 },
    { texto: 'A mí me gusto porque puedes conectarte a la aplicación donde sea que me encuentre', autor: 'Ben 10', imagen: ben, estrellas: 5 },
    { texto: 'A mí me gustó porque puedes conectarte a la aplicación donde sea que me encuentre', autor: 'Pablo', imagen: pablo, estrellas: 3 },
    { texto: 'La página es muy buena ya que aporta información acerca de mi ubicación', autor: 'Marta', imagen: marta, estrellas: 5 },
    { texto: 'Cheee voludo la aplicación la recomendó un amigo y me sirvió demasiado', autor: 'Messi', imagen: messi, estrellas: 4 },
    { texto: 'La página es muy buena ya que aporta información acerca de mi ubicación', autor: 'Marta', imagen: marta, estrellas: 5 },
    { texto: 'Por queeeee ereees mi noviooooooooooooooo Cristiaaan', autor: 'Messi', imagen: messi, estrellas: 4 },
    { texto: 'La página es muy buena ya que aporta información acerca de mi ubicación', autor: 'Marta', imagen: marta, estrellas: 5 },
    { texto: 'Cheee voludo la aplicación la recomendó un amigo y me sirvió demasiado', autor: 'Ben 10', imagen: ben, estrellas: 4 },
    { texto: 'A mí me gustó porque puedes conectarte a la aplicación donde sea que me encuentre', autor: 'Marta ', imagen: marta, estrellas: 5 },
    { texto: 'La página es muy buena ya que aporta información acerca de mi ubicación', autor: 'Messi', imagen: messi, estrellas: 4 }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id='comentario' className="comentarios-container">
      <h2>Comentarios</h2>
      <br/>
      <Slider {...settings}>
        {comentarios.map((comentario, index) => (
          <Comentario key={index} {...comentario} />
        ))}
      </Slider>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Comentarios;
