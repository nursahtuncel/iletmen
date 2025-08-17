import { Link } from 'react-router-dom';
import "./HizmetlerimizCTA.css";

const HizmetlerimizCTA = () => {
  return (
    <section className="hizmetlerimiz__cta">
      <div className="container">
        <div className="hizmetlerimiz__cta-content">
          <h2 className="hizmetlerimiz__cta-title">
            Hemen Başlayın
          </h2>
          <p className="hizmetlerimiz__cta-description">
            Ücretsiz demo için bizimle iletişime geçin ve işletmenizin potansiyelini keşfedin.
          </p>
          <div className="hizmetlerimiz__cta-actions">
            <Link to="/bize-ulasin" className="btn btn-primary btn-large">
              Demo Talep Et
            </Link>
            <Link to="/bize-ulasin" className="btn btn-secondary btn-large">
              Teknik Destek
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HizmetlerimizCTA;
