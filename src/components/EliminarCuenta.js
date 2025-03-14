import React, { useState } from 'react';

const EliminarCuenta = () => {
  const [mensaje, setMensaje] = useState('');
  const [confirmacion, setConfirmacion] = useState(false);

  const styles = {
    container: {
      backgroundColor: '#fff9f1', // fondo naranja muy claro
      minHeight: '100vh',
      padding: '32px 16px',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: '#f97316', // naranja
      padding: '16px 24px',
      color: 'white',
      textAlign: 'center'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0
    },
    content: {
      padding: '24px',
    },
    warningBox: {
      borderLeft: '4px solid #fb923c', // naranja más claro
      paddingLeft: '16px',
      paddingTop: '8px',
      paddingBottom: '8px',
      marginBottom: '16px'
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#4b5563',
      margin: '8px 0'
    },
    buttonContainer: {
      textAlign: 'center',
      marginTop: '24px'
    },
    deleteButton: {
      padding: '12px 24px',
      backgroundColor: '#f97316', // naranja
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s'
    },
    confirmationBox: {
      backgroundColor: '#ffedd5', // naranja muy claro
      border: '1px solid #fed7aa',
      borderRadius: '6px',
      padding: '16px',
      marginTop: '16px'
    },
    confirmTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#c2410c', // naranja oscuro
      marginBottom: '8px'
    },
    buttonsGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '16px'
    },
    confirmButton: {
      padding: '8px 16px',
      backgroundColor: '#f97316', // naranja
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontWeight: '500',
      cursor: 'pointer'
    },
    cancelButton: {
      padding: '8px 16px',
      backgroundColor: '#e5e7eb', // gris claro
      color: '#4b5563',
      border: 'none',
      borderRadius: '6px',
      fontWeight: '500',
      cursor: 'pointer'
    },
    successMessage: {
      backgroundColor: '#d1fae5', // verde claro
      border: '1px solid #a7f3d0',
      borderRadius: '6px',
      padding: '16px',
      marginTop: '16px',
      textAlign: 'center',
      color: '#047857' // verde oscuro
    },
    footer: {
      backgroundColor: '#ffedd5', // naranja muy claro
      padding: '12px 24px',
      borderTop: '1px solid #fed7aa', // borde naranja claro
      textAlign: 'center'
    },
    footerText: {
      fontSize: '14px',
      color: '#ea580c', // naranja medio
      margin: 0
    }
  };

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
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Eliminar Cuenta</h1>
        </div>
        
        <div style={styles.content}>
          <div style={styles.warningBox}>
            <p style={styles.paragraph}>
              Si deseas eliminar tu cuenta, ten en cuenta que se eliminarán todos tus datos de forma permanente.
              Este proceso no se puede deshacer.
            </p>
          </div>
          
          {!confirmacion && !mensaje && (
            <div style={styles.buttonContainer}>
              <p style={styles.paragraph}>Para proceder, haz clic en el botón de abajo.</p>
              <button 
                onClick={handleSolicitudEliminar} 
                style={styles.deleteButton}
              >
                Solicitar Eliminación
              </button>
            </div>
          )}
          
          {confirmacion && (
            <div style={styles.confirmationBox}>
              <h3 style={styles.confirmTitle}>¿Estás seguro?</h3>
              <p style={styles.paragraph}>Esta acción eliminará permanentemente tu cuenta y todos tus datos asociados.</p>
              <div style={styles.buttonsGroup}>
                <button 
                  onClick={handleEliminarCuenta} 
                  style={styles.confirmButton}
                >
                  Sí, eliminar mi cuenta
                </button>
                <button 
                  onClick={handleCancelar} 
                  style={styles.cancelButton}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
          
          {mensaje && (
            <div style={styles.successMessage}>
              <p>{mensaje}</p>
            </div>
          )}
        </div>
        
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Si tienes alguna pregunta, contacta con soporte antes de continuar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EliminarCuenta;