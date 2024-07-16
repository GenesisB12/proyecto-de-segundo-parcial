// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/barra.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/login">Inicio de Sesión</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/registro-paciente">Registro Paciente</Link></li>
        <li><Link to="/historial-paciente">Historial Paciente</Link></li>
        <li><Link to="/añadir-historial">Añadir Historial</Link></li>
        <li><Link to="/registro-citas">Registro Citas</Link></li>
        <li><Link to="/pagos">Pagos</Link></li>
        <li><Link to="/informe">Informe</Link></li>
        <li><Link to="/mostrar-usuarios">Mostrar Usuarios</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
