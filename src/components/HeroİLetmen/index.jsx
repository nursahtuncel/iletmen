import { CheckCircle, Rocket, Shield } from 'lucide-react';
import heroImage from "./../../../public/images/photo-1.png";
import './style.css';


const Heroİletmen = () => {
  return (
    <section className="iletmen-hero">
      <div className="container">
        <div className="iletmen-hero-content">
          <div className="iletmen-hero-text">
            <h1 className="iletmen-hero-title">
              <span className="iletmen-hero-title-highlight">İletmen Hizmeti</span> almak ister misiniz?
            </h1>
            <p className="iletmen-hero-subtitle">
              İletmen ile paketlerinizi ve ürünlerinizi hızlı, güvenli ve memnuniyetle teslim ettirin! 
              Hemen formu doldurun ve İletmen ayrıcalığını yaşayın!
            </p>
            <div className="iletmen-hero-actions">
              <button 
                className="btn btn-primary iletmen-hero-cta"
                onClick={() => 
                  document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                FORMU DOLDUR
              </button>
            </div>
          </div>
          <div className="iletmen-hero-visual"> 
        <img src={heroImage} alt="İletmen Hizmeti" />
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroİletmen;
