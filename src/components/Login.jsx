import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useUser } from '../userContext';
import logo from '../imgs/logo.png'; // Importa la imagen del logo

// Definir el esquema de validación con Yup
const loginValidationSchema = yup.object().shape({
  email: yup
    .string("Ingresa tu correo electrónico")
    .required("*Campo Obligatorio")
    .email("Ingresa un correo electrónico válido"),
  password: yup
    .string("Ingresa tu contraseña")
    .required("*Campo Obligatorio"),
});

// Encriptado
const caesarCipher = (str, shift) => {
  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt();
      let base = code >= 65 && code <= 90 ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26) + base);
    }
    return char;
  }).join('');
};

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            
            const response = await axios.post('https://servertest-tnt7.onrender.com/api/users/login/', {
              email: values.email,
              password: values.password,
            });
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('welcomeMessage', '¡Bienvenido de nuevo!'); // Guardar mensaje de bienvenida
            setLoginSuccess(true);
            setLoginError('');
            alert("Inicio exitoso");
            setUser(user); // Guarda los datos del usuario en el contexto
            navigate('/inicio'); // Redirigir a la página de inicio
            console.log(token);
          } catch (error) {
            setLoginSuccess(false);
            setLoginError('Correo o contraseña incorrectos');
            setErrors({ email: ' ', password: ' ' }); // Clear field-specific errors
          }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form style={styles.form} onSubmit={handleSubmit}>
            <h2 style={styles.title}>Inicio de sesión</h2>
            <img src={logo} alt="Logo" style={styles.logo} /> {/* Imagen del logo */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Correo: </label>
              <Field
                type="text"
                name="email"
                style={styles.input}
                placeholder="Ingresa tu correo electrónico"
              />
              <ErrorMessage name="email" component="div" style={styles.error} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Contraseña: </label>
              <Field
                type="password"
                name="password"
                style={styles.input}
                placeholder="Ingresa tu contraseña"
              />
              <ErrorMessage name="password" component="div" style={styles.error} />
            </div>
            
            {loginError && <div style={styles.error}>{loginError}</div>}
            {loginSuccess && <div style={styles.success}>¡Login exitoso!</div>}
            <br></br>
            <p>¿No tienes una cuenta? <Link to="/register">Registrate aqui</Link></p>
            <p>¿Olvidaste tu contraseña? <Link to="/recuperar contraseña" style={styles.link1}>Click aqui</Link></p>
            <button type="submit" style={styles.button}>Iniciar</button>
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
    backgroundColor: '#f7f7f7',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    width: '80%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '15px',
  },
  logo: {
    width: '100px',  // Ajusta el tamaño según sea necesario
    height: 'auto',
    marginBottom: '20px',  // Espacio entre la imagen y el siguiente contenido
  },
  inputGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  error: {
    color: 'red',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#E64A19',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  success: {
    color: 'green',
    marginTop: '5px',
  }
};

export default Login;
