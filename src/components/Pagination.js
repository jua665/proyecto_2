import React, { useEffect } from 'react';
import '../components/css/Pagination.css';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  useEffect(() => {
    console.log("Pagination montado");
    return () => console.log("Pagination desmontado");
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={`page-${number}`} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
