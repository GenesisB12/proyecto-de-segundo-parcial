import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/administracion.css';
import Logo from '../../assets/image/LOGO-ULEAM-HORIZONTAL.png';
const Administracion = () => {
  return (
    <div className="administracion">
      <div className="panel">
      <img src={Logo} alt="Logo ULEAM" className="Logo" />
        <Link to="/">Cerrar sesión</Link>
        {/* <Link to="/registro-paciente">Registro Paciente</Link> */}
        <Link to="/historial-paciente">Historial Paciente</Link>
        <Link to="/añadir-historial">Añadir Historial</Link>
        <Link to="/pagos">Pagos</Link>
        <Link to="/informe">Informe</Link>
        <Link to="/mostrar-usuarios">Mostrar Usuarios</Link>
      </div>
    </div>
  );
}

export default Administracion;
