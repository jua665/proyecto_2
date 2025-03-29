import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import logo from '../imgs/logo.png'; // Importa la imagen del logo

// Definir el esquema de validación con Yup
const registerValidationSchema = yup.object().shape({
  firstName: yup
    .string("Ingresa tu nombre")
    .required("*Campo Obligatorio"),
  email: yup
    .string("Ingresa tu correo electrónico")
    .required("*Campo Obligatorio")
    .email("Ingresa un correo electrónico válido"),
  password: yup
    .string("Ingresa tu contraseña")
    .required("*Campo Obligatorio"),
  phone: yup
    .string("Ingresa tu número de teléfono")
    .matches(/^[0-9]+$/, "El teléfono solo puede contener números")
    .required("*Campo Obligatorio"),
});



const Register = () => {
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <div style={styles.container}>
      <Formik
        initialValues={{ firstName: '', email: '', password: '', phone: '' }}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {

          try {
            const response = await axios.post('https://servertest-tnt7.onrender.com/api/users/registro', {
              nombre: values.firstName,
              email: values.email,
              password: values.password,
              telefono: values.phone,
            }, { 
              headers: {
                'Content-Type': 'application/json'
              }
            });

            console.log('Registro exitoso:', response.data);
            alert(`¡Bienvenido/a, ${values.firstName}! Tu registro fue exitoso. Ahora puedes iniciar sesión y comenzar a disfrutar de nuestros servicios.`);
            navigate('/login'); // Redirigir al usuario a la página de inicio de sesión
          } catch (error) {
            console.error('Error durante el registro:', error);
            alert(error.response.data.message); 
            setErrors({ email: ' ', password: ' ' }); // Limpiar errores específicos del campo
          }
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form style={styles.form} onSubmit={handleSubmit}>
            <h2 style={styles.title}>Registro</h2>
            <img src={logo} alt="Logo" style={styles.logo} /> {/* Imagen del logo */}
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nombre:</label>
              <Field
                type="text"
                name="firstName"
                style={styles.input}
                placeholder="Ingresa tu nombre"
              />
              <ErrorMessage name="firstName" component="div" style={styles.error} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Teléfono:</label>
              <Field
                type="text"
                name="phone"
                style={styles.input}
                onKeyPress={handleKeyPress}
                placeholder="Ingresa tu número de teléfono"
              />
              <ErrorMessage name="phone" component="div" style={styles.error} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Correo: </label>
              <Field
                type="email"
                name="email"
                style={styles.input}
                placeholder="Ingresa tu correo electrónico"
              />
              <ErrorMessage name="email" component="div" style={styles.error} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Contraseña:</label>
              <Field
                type="password"
                name="password"
                style={styles.input}
                placeholder="Ingresa tu contraseña"
              />
              <ErrorMessage name="password" component="div" style={styles.error} />
            </div>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
            <button type="submit" style={styles.button}>Registrarse</button>
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
};

export default Register;
