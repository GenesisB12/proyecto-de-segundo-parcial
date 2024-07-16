// src/components/AppointmentScheduler.tsx
import React, { useState, useEffect } from 'react';
import '../../assets/css/RegistroCitas.css';
import '../../assets/css/barra.css';
import { Link } from 'react-router-dom';
interface Appointment {
  id: number;
  date: string;
  time: string;
  patient: string;
  dentist: string;
}

const AppointmentScheduler: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    patient: '',
    dentist: '',
  });

  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAppointment: Appointment = {
      id: new Date().getTime(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    alert('Cita programada con éxito');
    setAppointmentData({
      date: '',
      time: '',
      patient: '',
      dentist: '',
    });
  };

  const handleDelete = (id: number) => {
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    alert('Cita eliminada con éxito');
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
    <div className="appointment-scheduler-container">
      <form className="appointment-scheduler-form" onSubmit={handleSubmit}>
        <h2>Programar Cita</h2>
        <input
          type="date"
          name="date"
          placeholder="Fecha"
          value={appointmentData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          placeholder="Hora"
          value={appointmentData.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="patient"
          placeholder="Paciente"
          value={appointmentData.patient}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dentist"
          placeholder="Odontólogo"
          value={appointmentData.dentist}
          onChange={handleChange}
          required
        />
        <button type="submit">Programar</button>
      </form>
      <div className="appointment-list">
        <h2>Citas Programadas</h2>
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-item">
            <p><strong>Fecha:</strong> {appointment.date}</p>
            <p><strong>Hora:</strong> {appointment.time}</p>
            <p><strong>Paciente:</strong> {appointment.patient}</p>
            <p><strong>Odontólogo:</strong> {appointment.dentist}</p>
            <button onClick={() => handleDelete(appointment.id)} className="delete-button">
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default AppointmentScheduler;
