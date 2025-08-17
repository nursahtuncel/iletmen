
import { CheckCircle, Rocket, Shield } from 'lucide-react';
import heroImage from "./../../../public/images/photo-1.png";
import './Hero.css';

const Hero = () => {
  const handlePrimaryCTA = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/bize-ulasin';
    }
  };

  const handleSecondaryCTA = () => {
    window.location.href = '/hizmetlerimiz';
  };

  return (
    <section className="hero">
      <div className="hero__background-pattern"></div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text-content">
            <h1 className="hero__title">
              <span className="hero__title-highlight">Paket serviste</span>  Akıllı teslimat
            </h1>
            
            <p className="hero__subtitle">
            Geliştirdiğimiz iş modeli ve yazılım ile, uzman olmadığınız bir konuda çözüm üretmek zorunda kalmayacaksınız.
            </p>
            
            <div className="hero__actions">
              <button 
                onClick={handlePrimaryCTA}
                className="btn btn-primary btn-large hero__cta-primary"
              >
                Hemen Başvur
              </button>
              
              <button 
                onClick={handleSecondaryCTA}
                className="btn btn-secondary btn-large hero__cta-secondary">
                Hizmetlerimizi Keşfet
              </button>
            </div>
            
            <div className="hero__trust-indicators">
              <div className="hero__trust-item">
                <CheckCircle className="hero__trust-icon" size={20} />
                <span className="hero__trust-text">5+ Yıl Deneyim</span>
              </div>
              <div className="hero__trust-item">
                <Rocket className="hero__trust-icon" size={20} />
                <span className="hero__trust-text">Hızlı Entegrasyon</span>
              </div>
              <div className="hero__trust-item">
                <Shield className="hero__trust-icon" size={20} />
                <span className="hero__trust-text">Güvenli Altyapı</span>
              </div>
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__image-container">
              <div className="hero__main-image">
                <img src={heroImage} alt="Teslimat Yönetimi" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
