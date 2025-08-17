import { Link } from 'react-router-dom';
import './HeroServices.css';

const Hero = () => {
  return (
    <section className="hizmetlerimiz__hero">
      <div className="container">
        <div className="hizmetlerimiz__hero-content">
          <h1 className="hizmetlerimiz__hero-title">
            Kapsamlı <span className="hizmetlerimiz__hero-highlight">Teslimat Çözümleri</span>
          </h1>
          <p className="hizmetlerimiz__hero-subtitle">
            İşletmenizin ihtiyaçlarına özel geliştirilmiş, modern teknoloji ile desteklenen 
            teslimat yönetim sistemleri ile operasyonel verimliliğinizi maksimize edin.
          </p>
          <div className="hizmetlerimiz__hero-actions">
            <Link to="/bize-ulasin" className="btn btn-primary btn-large">
              Ücretsiz Demo
            </Link>
            <a href="#services" className="btn btn-secondary btn-large">
              Hizmetleri İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
