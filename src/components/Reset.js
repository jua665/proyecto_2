import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import logo from '../imgs/logo.png';  
import '../components/css/style.css';  
import { useNavigate } from "react-router-dom";

const resetPasswordValidationSchema = yup.object().shape({
  token: yup
    .string("Ingresa tu token")
    .required("*Campo Obligatorio"),
  password: yup
    .string("Ingresa tu contraseña")
    .required("*Campo Obligatorio")
    .min(6, "Al menos 6 caracteres")
    .matches(/[0-9]/, "Debe contener al menos un número"),
  confirmPassword: yup
    .string("Confirma tu contraseña")
    .required("*Campo Obligatorio")
    .oneOf([yup.ref('password')], "Las contraseñas deben coincidir"),
});

const Reset = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ token: '', password: '', confirmPassword: '' }}
        validationSchema={resetPasswordValidationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await axios.post(`https://servertest-tnt7.onrender.com/api/users/reset-password/${values.token}`, {
              token: values.token,
              password: values.password
            }, { 
              headers: {
                'Content-Type': 'application/json'
              }
            });
            alert("¡Contraseña restablecida exitosamente! Redirigiendo al inicio de sesión...");
            setTimeout(() => navigate('/login'), 2000);
          } catch (error) {
            setErrors({ token: 'Error al restablecer la contraseña. Verifica el token.' });
          }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form style={styles.form} onSubmit={handleSubmit}>
            <img src={logo} alt="Logo del proyecto" style={styles.logo} />
            <h2 style={styles.title}>Restablecer Contraseña</h2>
            <p style={styles.label}>Ingrese el token de recuperación</p>
            <div style={styles.label}>
              <Field
                type="text"
                name="token"
                placeholder="Token"
                className="input"
                style={styles.input}
              />
              <ErrorMessage name="token" component="div" className="error" />
            </div>
            <p style={styles.label}>Ingrese su nueva contraseña</p>
            <div style={styles.label}>
              <Field
                type="password"
                name="password"
                placeholder="Contraseña"
                className="input"
                style={styles.input}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div style={styles.label}>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                className="input"
                style={styles.input}
              />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>
            <p style={styles.label}>Su contraseña debe contener:</p>
            <ul>
              <li>Al menos 6 caracteres</li>
              <li>Contener al menos un número</li>
            </ul>
            <button type="submit" style={styles.button}>Continuar</button>
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
    width: '120px',
    marginBottom: '20px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
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
};

export default Reset;
