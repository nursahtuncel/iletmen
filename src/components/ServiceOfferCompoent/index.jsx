import './style.css';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import ServiceImage from '../../../public/images/photo-3.png';

const ServiceOffer = () => {
  const handlePrimaryCTA = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/iletisim';
    }
  };

  const handleSecondaryCTA = () => {
    window.location.href = '/hizmet-detay';
  };

  return (
    <section className="service-offer-container">
      <div className="image-wrapper">
        <img src={ServiceImage} alt="Profesyonel İletmen Hizmeti" className="service-image" />
      </div>
      <div className="offer-content">
        <h2 className="offer-title">Siz de iletmen hizmeti almak ister misiniz?</h2>
        <p className="offer-description">
      
         Gönderilerinizi iletmen hızıyla teslim etmek için can atıyoruz.   Uzman ekibimizle ihtiyaçlarınıza özel çözümler için hemen bizimle iletişime geçin.
        </p>
        
        <div className="cta-buttons">
          <button 
            className="primary-btn"
            onClick={handlePrimaryCTA}
          >
            <span>Hemen Teklif Al</span>
            <FaArrowRight className="btn-icon" />
          </button>
          
          <button 
            className="secondary-btn"
            onClick={handleSecondaryCTA}
          >
            <span>Detaylı Bilgi</span>
            <FaInfoCircle className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceOffer;