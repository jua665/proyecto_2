import React from "react";
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import logo from '../imgs/logo.png';
import '../components/css/style.css';  // Importa el archivo CSS


const Verificar = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ code: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          navigate('/reset');
        }}
      >
        {({ handleSubmit }) => (
          <Form style={styles.form} onSubmit={handleSubmit}>
            <img src={logo} alt="Logo del proyecto" style={styles.logo} />
            <h2 style={styles.title}>Verificación</h2>
            <p style={styles.label} >Le hemos enviado un código para verificar su dirección de correo electrónico.</p>
            <div style={styles.label}>
              <Field
                type="text"
                name="code"
                placeholder="Código"
                className="input"
                style={styles.input}
              />
            </div>
            <p style={styles.label}>El código caduca en: 01:32</p>
            <button type="submit" style={styles.button}>Verificar</button>
            <br/>
            <button type="button" style={styles.button1}>Enviar de Nuevo</button>
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
    width: '100%',
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
    padding: '12px 25px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#E64A19',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
  button1: {
    padding: '12px 25px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#000000',
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

export default Verificar;
