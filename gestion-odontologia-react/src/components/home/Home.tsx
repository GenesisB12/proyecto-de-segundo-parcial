import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/barra.css'; // Asegúrate de tener tu archivo CSS adecuadamente importado
import '../../assets/css/home.css'; // Asegúrate de tener tu archivo CSS adecuadamente importado
const Home = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/login">Inicio de Sesión</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </nav>
      
      {/* Contenido principal */}
      <main className="main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Bienvenido al Consultorio Dental de la ULEAM</h1>
            <p>Ofrecemos atención odontológica de calidad para ti y tu familia.</p>
            <Link to="/registro" className="btn-primary">Separa tu cita registrandote</Link>
          </div>
          
        </section>
        
        {/* About Section */}
        <section className="about-section">
          <div className="about-content">
            <h2>Sobre Nosotros</h2>
            <p>Somos un equipo dedicado a mejorar tu salud dental con tecnología avanzada y personal cualificado.</p>
          </div>
          
        </section>
        
        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <h2>Contacto</h2>
            <p>Estamos aquí para responder a tus preguntas y agendar tu próxima cita.</p>
            <Link to="https://facebook.com" className="btn-primary">Contáctanos</Link>
          </div>
          {/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..." 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="mapa"
          ></iframe> */}
        </section>
      </main>
    </div>
  );
}

export default Home;
