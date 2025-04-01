import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import '../components/css/UserTable.css';
 
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Estado para almacenar el usuario seleccionado
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje
  const usersPerPage = 8; // Número de usuarios por página

  useEffect(() => {
    fetch('https://servertest-tnt7.onrender.com/api/users')
      .then(response => response.json())
      .then(data => {
        // Filtrar usuarios que tengan la propiedad suscripcion
        const usersWithSubscription = data.filter(user => user.suscripcion);
        setUsers(usersWithSubscription);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleOpenModal = (user) => {
    console.log("Abriendo modal para:", user);
    setSelectedUser(user);
    setIsModalOpen(true); // Abrir el modal
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // Cerrar el modal
    setMessage(""); // Limpiar el mensaje
  };

  const handleSendMessage = async () => {
    console.log(selectedUser)
    try {
      // Enviar la suscripción y el mensaje al backend
      const response = await fetch('https://servertest-tnt7.onrender.com/api/users/suscripcionMod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          suscripcion: selectedUser.suscripcion, // Enviar la suscripción del usuario
          mensaje: message // Enviar el mensaje
        })
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }
  
      const data = await response.json();
      console.log('Mensaje enviado:', data);
      alert('Mensaje enviado con éxito');
      handleCloseModal();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un error al enviar el mensaje');
    }
  };
        
  // Obtener los usuarios de la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="table-container">
      <h1 className="table-title">Lista de Usuarios</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Casco</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleOpenModal(user)}>Enviar Mensaje</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        usersPerPage={usersPerPage} 
        totalUsers={users.length} 
        paginate={paginate} 
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enviar mensaje a {selectedUser.nombre}</h3>
            <textarea
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={handleCloseModal}>Cerrar</button>
              <button onClick={handleSendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
