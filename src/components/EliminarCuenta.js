import React, { useState } from 'react';

const EliminarCuenta = () => {
  const [mensaje, setMensaje] = useState('');

  const handleEliminarCuenta = () => {
    // Aquí deberías agregar la lógica para eliminar la cuenta (API call, autenticación, etc.)
    setMensaje('Tu solicitud de eliminación de cuenta ha sido enviada. Procesaremos tu solicitud en un plazo de 7 días.');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1>Eliminar Cuenta</h1>
      <p>
        Si deseas eliminar tu cuenta, ten en cuenta que se eliminarán todos tus datos de forma permanente.
        Este proceso no se puede deshacer.
      </p>
      <p>Para proceder, haz clic en el botón de abajo.</p>
      <button onClick={handleEliminarCuenta} style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
        Solicitar Eliminación
      </button>
      {mensaje && <p style={{ marginTop: '20px', color: 'green' }}>{mensaje}</p>}
    </div>
  );
};

export default EliminarCuenta;