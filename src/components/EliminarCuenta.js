import React, { useState } from 'react';

const EliminarCuenta = () => {
  const [mensaje, setMensaje] = useState('');
  const [confirmacion, setConfirmacion] = useState(false);

  const handleSolicitudEliminar = () => {
    setConfirmacion(true);
  };

  const handleEliminarCuenta = () => {
    // Aquí deberías agregar la lógica para eliminar la cuenta (API call, autenticación, etc.)
    setMensaje('Tu solicitud de eliminación de cuenta ha sido enviada. Procesaremos tu solicitud en un plazo de 7 días.');
    setConfirmacion(false);
  };

  const handleCancelar = () => {
    setConfirmacion(false);
  };

  return (
    <div className="bg-orange-50 min-h-screen py-8">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-500 px-6 py-4">
          <h1 className="text-2xl font-bold text-white text-center">Eliminar Cuenta</h1>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <p className="text-gray-700 leading-relaxed">
              Si deseas eliminar tu cuenta, ten en cuenta que se eliminarán todos tus datos de forma permanente.
              Este proceso no se puede deshacer.
            </p>
          </div>
          
          {!confirmacion && !mensaje && (
            <div className="text-center mt-6">
              <p className="mb-4 text-gray-700">Para proceder, haz clic en el botón de abajo.</p>
              <button 
                onClick={handleSolicitudEliminar} 
                className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md"
              >
                Solicitar Eliminación
              </button>
            </div>
          )}
          
          {confirmacion && (
            <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 mt-4">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">¿Estás seguro?</h3>
              <p className="text-gray-700 mb-4">Esta acción eliminará permanentemente tu cuenta y todos tus datos asociados.</p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={handleEliminarCuenta} 
                  className="px-4 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300"
                >
                  Sí, eliminar mi cuenta
                </button>
                <button 
                  onClick={handleCancelar} 
                  className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
          
          {mensaje && (
            <div className="bg-green-100 border border-green-200 rounded-lg p-4 mt-4 text-center">
              <p className="text-green-700">{mensaje}</p>
            </div>
          )}
        </div>
        
        <div className="bg-orange-100 px-6 py-3 border-t border-orange-200">
          <p className="text-sm text-orange-700 text-center">
            Si tienes alguna pregunta, contacta con soporte antes de continuar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EliminarCuenta;