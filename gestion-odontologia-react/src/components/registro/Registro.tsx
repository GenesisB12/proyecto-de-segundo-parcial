import React, { useState } from 'react';
import '../../assets/css/Registro.css';
import { saveUserToLocalStorage } from '../../utils/auth';
import { User } from '../../utils/users';
import Logo from '../../assets/image/LOGO-ULEAM-HORIZONTAL.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

const Registro: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cedula, setCedula] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [error, setError] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
    } else if (!validateUsername(username)) {
      setError('El nombre de usuario debe tener al menos 4 caracteres');
    } else if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres');
    } else if (!validateCedula(cedula)) {
      setError('La cédula debe tener 10 dígitos');
    } else if (!validateFechaNacimiento(fechaNacimiento)) {
      setError('La fecha de nacimiento no es válida');
    } else if (!validateCorreo(correo)) {
      setError('El correo electrónico no es válido');
    } else if (!validateNombre(nombre)) {
      setError('El nombre no puede estar vacío');
    } else if (!validateApellido(apellido)) {
      setError('El apellido no puede estar vacío');
    } else {
      const newUser: User = {
        username,
        password,
        cedula,
        fechaNacimiento,
        correo,
        nombre,
        apellido,
      };
      saveUserToLocalStorage(newUser); // Guardar nuevo usuario en localStorage
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setCedula('');
      setFechaNacimiento('');
      setCorreo('');
      setError('');
      setApellido('');
      setNombre('');
      alert('Usuario registrado con éxito');
    }
  };

  const validateUsername = (username: string) => {
    return username.length >= 4 && username.length <= 10;
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateCedula = (cedula: string) => {
    return cedula.length === 10;
  };

  const validateFechaNacimiento = (fechaNacimiento: string) => {
    // You can add your own validation logic here
    const currentDate = new Date();
    const selectedDate = new Date(fechaNacimiento);
    
    return selectedDate <= currentDate;
  };

  const validateCorreo = (correo: string) => {
    // You can add your own validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(correo);
  };

  const validateNombre = (nombre: string) => {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    return nombreRegex.test(nombre.trim()) && nombre.trim().length >= 2 && nombre.trim().length <= 20;
  };

  const validateApellido = (apellido: string) => {
    const apellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    return apellidoRegex.test(apellido.trim()) && apellido.trim().length >= 2 && apellido.trim().length <= 20;
  };

  return (
    <div className="register-container">
      <button className="back-button" id="back-button" onClick={() => navigate('/login')}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <form className="register-form" onSubmit={handleRegister}>
        <img src={Logo} alt="Logo ULEAM" className="Logo" />
        <h2>Registro</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Cedula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Fecha de nacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
