// src/components/Billing.tsx
import React, { useState, useEffect } from 'react';
import '../../assets/css/Pagos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface Payment {
  date: string;
  amount: number;
  description: string;
  name: string;
  cedula: string;
}

const Billing: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [paymentData, setPaymentData] = useState({
    date: '',
    amount: 0,
    description: '',
    name: '',
    cedula: '',
  });

  useEffect(() => {
    const storedPayments = localStorage.getItem('payments');
    if (storedPayments) {
      setPayments(JSON.parse(storedPayments));
    }
  }, []);

  const navigate = useNavigate(); // Move the useNavigate hook call inside the component body

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validar el formato de la fecha
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(paymentData.date)) {
      alert('Fecha inválida. El formato debe ser YYYY-MM-DD');
      return;
    }
  
    // Validar el monto mínimo
    if (paymentData.amount < 10) {
      alert('El monto debe ser de al menos 10');
      return;
    }
  
    // Validar la longitud de la descripción
    if (paymentData.description.length < 5 || paymentData.description.length > 20) {
      alert('La descripción debe tener entre 5 y 20 caracteres');
      return;
    }
  
    // Validar la longitud del nombre
    if (paymentData.name.length < 5 || paymentData.name.length > 15) {
      alert('El nombre debe tener entre 5 y 15 caracteres');
      return;
    }
  
    // Validar la longitud de la cédula
    if (paymentData.cedula.length !== 10) {
      alert('La cédula debe tener 10 caracteres');
      return;
    }
  
    const updatedPayments = [...payments, paymentData];
    setPayments(updatedPayments);
    localStorage.setItem('payments', JSON.stringify(updatedPayments));
    alert('Pago registrado con éxito');
  };

  return (
    <div className="billing-container">
      <button className="back-button" id="back-button" onClick={() => navigate('/administracion')}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="pagos">
      <form className="billing-form" onSubmit={handleSubmit}>
        <h2>Registro de Pagos</h2>
        <input
          type="date"
          name="date"
          placeholder="Fecha"
          value={paymentData.date}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Monto"
          value={paymentData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={paymentData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre del paciente"
          value={paymentData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cedula"
          placeholder="Cédula del paciente"
          value={paymentData.cedula}
          onChange={handleChange}
          required
        />

        <button type="submit">Registrar</button>
      </form>
      </div>
      
      <div className="payment-list">
        <h2>Historial de Pagos</h2>
        {payments.map((payment, index) => (
          <div key={index} className="payment-item">
            <p><strong>Fecha:</strong> {payment.date}</p>
            <p><strong>Monto:</strong> ${payment.amount}</p>
            <p><strong>Descripción:</strong> {payment.description}</p>
            <p><strong>Nombre del paciente:</strong> {payment.name}</p>
            <p><strong>Cédula del paciente:</strong> {payment.cedula}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billing;
