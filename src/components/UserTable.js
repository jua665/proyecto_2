import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import '../components/css/UserTable.css';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8; // Número de usuarios por página

  useEffect(() => {
    fetch('https://servertest-tnt7.onrender.com/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);
        
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
              <td>{user.casco_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        usersPerPage={usersPerPage} 
        totalUsers={users.length} 
        paginate={paginate} 
      />
    </div>
  );
};

export default UserTable;
