import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import logo from '../imgs/logo.png';  
import '../components/css/style.css';  // Importa el archivo CSS

const recoveryValidationSchema = yup.object().shape({
  email: yup
    .string("Ingresa tu correo electrónico")
    .required("*Campo Obligatorio")
    .email("Ingresa un correo electrónico válido"),
});

const Recuperarcontra = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Obtener la función de navegación

  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={recoveryValidationSchema}
        onSubmit={async(values, { setSubmitting, setErrors }) => {
          try {
            const response = await axios.post('https://servertest-tnt7.onrender.com/api/users/request-reset', {
              email: values.email
            });
            setSuccessMessage('Verifica tu correo electrónico para continuar.');
            setErrorMessage('');
            navigate('/reset');
          } catch (error) {
            setErrorMessage('Hubo un problema con la solicitud. Inténtalo de nuevo.');
            setSuccessMessage('');
          }
          setSubmitting(false);
        }}
      > 
        {({ handleSubmit }) => (
          <Form style={styles.form} onSubmit={handleSubmit}>
            <img src={logo} alt="Logo del proyecto" style={styles.logo} />
            <h2 style={styles.title}>Recuperación de contraseña</h2>
            <p style={styles.label}>Ingresa tu correo electrónico para recuperar tu contraseña</p>
            <br></br>
            <div style={styles.label}>
              <Field
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="input"
                style={styles.input}
              />
              <ErrorMessage name="email" component="div" style={styles.error} />
            </div>
            <br></br>
            <button type="submit" style={styles.button}>Recuperar contraseña</button>
            {successMessage && <div style={styles.successMessage}>{successMessage}</div>}
            {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      width: '100%',
      maxWidth: '400px',
    },
    logo: {
      width: '120px', // Ajusta el tamaño del logo según tus necesidades
      marginBottom: '20px',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
      color: '#333',
    },
    inputGroup: {
      marginBottom: '20px',
      width: '100%',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '600',
      color: '#555',
    },
    input: {
      width: '110%', // Este valor hace que el campo ocupe el 100% del ancho del contenedor del formulario
      maxWidth: '500px',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    error: {
      color: 'red',
      marginTop: '5px',
      fontSize: '14px',
    },
    button: {
      padding: '12px 30px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#E64A19',
      color: '#ffffff',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
    },
    successMessage: {
      color: 'green',
      marginTop: '10px',
      fontSize: '16px',
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
      fontSize: '16px',
    },
    link1: {
      color: '#1e88e5',
      textDecoration: 'none',
    },
  };

export default Recuperarcontra;
