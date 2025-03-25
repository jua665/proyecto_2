import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import logo from '../imgs/logo.png';  
import '../components/css/style.css';  // Importa el archivo CSS
import { useNavigate, useParams } from "react-router-dom";

const resetPasswordValidationSchema = yup.object().shape({
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

//encriptado
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

const Reset = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Obtener el token desde la URL

  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={resetPasswordValidationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const contraseñaCifrado = caesarCipher(values.password, 3);
            await axios.post(`https://servertest-tnt7.onrender.com/api/users/reset-password/${token}`, {
              password: contraseñaCifrado
            });
            alert("¡Contraseña restablecida exitosamente! Redirigiendo al inicio de sesión...");
            setTimeout(() => navigate('/login'), 2000); // Redirigir después de 2 segundos
          } catch (error) {
            setErrors({ password: 'Error al restablecer la contraseña. Inténtalo de nuevo.' });
          }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form style={styles.form} onSubmit={handleSubmit}>
            <img src={logo} alt="Logo del proyecto" style={styles.logo} />
            <h2 style={styles.title}>Restablecer Contraseña</h2>
            <p style={styles.label}>Por favor ingrese su nueva contraseña</p>
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
              <li>Contiene un número</li>
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
};

export default Reset;
