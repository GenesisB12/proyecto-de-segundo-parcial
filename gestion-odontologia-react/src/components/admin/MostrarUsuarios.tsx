import React, { useState, useEffect } from 'react';

import '../../assets/css/usuarios.css';
import { getUsersFromLocalStorage, deleteUserFromLocalStorage } from '../../utils/auth';
import { User } from '../../utils/users';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const MostrarUsuarios: React.FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Load users from localStorage when the component mounts
    const storedUsers = getUsersFromLocalStorage();
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const handleDelete = (usernameToDelete: string) => {
    const updatedUsers = users.filter(user => user.username !== usernameToDelete);
    setUsers(updatedUsers);
    deleteUserFromLocalStorage(usernameToDelete); // Remove user from localStorage
    alert(`Usuario ${usernameToDelete} eliminado con éxito`);
  };

  return (
    <div className="registro-usuarios-container">
      <button className="back-button" id="back-button" onClick={() => navigate('/administracion')}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="usuarios-registrados">
        <h2>Usuarios Registrados</h2>
        {users.map((user, index) => (
          <div key={index} className="usuario-item">
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Nombre:</strong> {user.nombre}</p>
            <p><strong>Apellido:</strong> {user.apellido}</p>
            <p><strong>Contraseña:</strong> {user.password}</p>
            <p><strong>Cedula:</strong> {user.cedula}</p>
            <p><strong>Fecha de Nacimiento:</strong> {user.fechaNacimiento}</p>
            <p><strong>Correo:</strong> {user.correo}</p>
            <button onClick={() => handleDelete(user.username)} className="delete-button">
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostrarUsuarios;
