import React from 'react';

const PoliticaPrivacidad = () => {
  const styles = {
    container: {
      backgroundColor: '#fff9f1', // fondo naranja muy claro
      minHeight: '100vh',
      padding: '32px 16px',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: '#f97316', // naranja
      padding: '16px 24px',
      color: 'white'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0
    },
    content: {
      padding: '24px',
    },
    introduction: {
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#4b5563',
      marginBottom: '24px'
    },
    section: {
      marginBottom: '20px',
      borderLeft: '4px solid #fb923c', // naranja más claro
      paddingLeft: '16px'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#c2410c', // naranja oscuro
      marginBottom: '8px'
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#4b5563'
    },
    contactSection: {
      backgroundColor: '#ffedd5', // naranja muy claro
      padding: '16px',
      borderRadius: '8px',
      marginTop: '24px'
    },
    link: {
      color: '#ea580c', // naranja medio
      fontWeight: '500',
      textDecoration: 'none'
    },
    footer: {
      backgroundColor: '#ffedd5', // naranja muy claro
      padding: '16px 24px',
      borderTop: '1px solid #fed7aa', // borde naranja claro
      textAlign: 'center'
    },
    footerText: {
      fontSize: '14px',
      color: '#ea580c', // naranja medio
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Política de Privacidad</h1>
        </div>
        
        <div style={styles.content}>
          <p style={styles.introduction}>
            En nuestra aplicación, respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales.
            Esta política explica cómo recopilamos, usamos y protegemos tu información.
          </p>
          
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Información que Recopilamos</h2>
            <p style={styles.paragraph}>
              Podemos recopilar información personal como tu nombre, dirección de correo electrónico y otros datos
              necesarios para el funcionamiento de la aplicación.
            </p>
          </div>
          
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Cómo Usamos tu Información</h2>
            <p style={styles.paragraph}>
              Utilizamos tu información para mejorar tu experiencia en la aplicación, personalizar los servicios y
              garantizar la seguridad de la plataforma.
            </p>
          </div>
          
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Protección de Datos</h2>
            <p style={styles.paragraph}>
              Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados o divulgación.
            </p>
          </div>
          
          <div style={styles.contactSection}>
            <h2 style={styles.sectionTitle}>Contacto</h2>
            <p style={styles.paragraph}>
              Si tienes preguntas sobre nuestra política de privacidad, puedes contactarnos en{' '}
              <a href="mailto:juan.servin.21s@utzmg.edu.mx" style={styles.link}>
                juan.servin.21s@utzmg.edu.mx
              </a>
            </p>
          </div>
        </div>
        
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;