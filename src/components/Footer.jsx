import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mais55 Lab</h3>
          <p>Soluções criativas para elevar a sua marca ao próximo nível.</p>
        </div>
        
        <div className="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/" onClick={scrollTop}>Home</Link></li>
            <li><Link to="/Servicos" onClick={scrollTop}>Serviços</Link></li>
            <li><Link to="/Projetos" onClick={scrollTop}>Projetos</Link></li>
            <li><Link to="/SobreNos" onClick={scrollTop}>Sobre Nós</Link></li>
            <li><Link to="/Contactos" onClick={scrollTop}>Contactos</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Serviços</h4>
          <ul>
            <li><Link to="/Servicos?categoria=6" onClick={scrollTop}>Produção Audiovisual</Link></li>
            <li><Link to="/Servicos?categoria=2" onClick={scrollTop}>Gestão de Redes Sociais</Link></li>
            <li><Link to="/Servicos?categoria=7" onClick={scrollTop}>Design Gráfico</Link></li>
            <li><Link to="/Servicos?categoria=5" onClick={scrollTop}>Cobertura em Tempo Real</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contactos</h4>
          <ul>
            <li><a href="mailto:geral@mais55lab.com">📧 geral@mais55lab.com</a></li>
            <li><a href="tel:+351915546801">📱 915 546 801</a></li>
            <li>📍 Lisboa, Portugal</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 +55 Lab. Agência de comunicação. Portugal</p>
        <p><a href="/politica-de-privacidade.pdf" target="_blank" rel="noopener">Política de Privacidade</a></p>
      </div>
    </footer>
  );
}

export default Footer;
