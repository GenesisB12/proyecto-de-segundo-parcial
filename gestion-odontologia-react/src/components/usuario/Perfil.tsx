import React, { useState, useEffect } from 'react';
import '../../assets/css/Perfil.css';
import '../../assets/css/barra.css';
import { getLoggedInUser, updateUserInLocalStorage } from '../../utils/auth';
import { User } from '../../utils/users';
import { Link } from 'react-router-dom';

const Perfil: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editableUser, setEditableUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
      setUser(loggedInUser);
      setEditableUser({ ...loggedInUser });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editableUser) {
      const { name, value } = e.target;
      setEditableUser({ ...editableUser, [name]: value });
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (editableUser) {
      updateUserInLocalStorage(editableUser);
      setUser(editableUser);
      alert('Datos actualizados con éxito');
    }
  };

  return (
    <>
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Cerrar sesión</Link></li>
        <li><Link to="/registro-citas">Registro Citas</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </nav>
    
    <div className="perfil-container">
      <h2>Perfil de Usuario</h2>
      {user && editableUser ? (
        <form className="perfil-form" onSubmit={handleUpdate}>
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={editableUser.username}
            onChange={handleInputChange}
            required
            readOnly
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={editableUser.nombre}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={editableUser.apellido}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={editableUser.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="cedula"
            placeholder="Cédula"
            value={editableUser.cedula}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="fechaNacimiento"
            placeholder="Fecha de nacimiento"
            value={editableUser.fechaNacimiento}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={editableUser.correo}
            onChange={handleInputChange}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Actualizar</button>
        </form>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
    </>
    
  );
};

export default Perfil;
