// src/components/PatientRegistration.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/RegistroPaciente.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const RegistroPaciente: React.FC = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    birthDate: '',
    gender: '',
    address: '',
    contactInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const navigate = useNavigate(); // Add this line to import the useNavigate hook and assign it to the navigate variable

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('patientData', JSON.stringify(patientData));
    alert('Paciente registrado con éxito');
  };

  return (
    <div className="patient-registration-container">
      
      <form className="patient-registration-form" onSubmit={handleSubmit}>
      <button className="back-button" id="back-button" onClick={() => navigate('/administracion')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        <h2>Registro de Paciente</h2>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={patientData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="birthDate"
          placeholder="Fecha de Nacimiento"
          value={patientData.birthDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Género"
          value={patientData.gender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={patientData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Información de Contacto"
          value={patientData.contactInfo}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroPaciente;
