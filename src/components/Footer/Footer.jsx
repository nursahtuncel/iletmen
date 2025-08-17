import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import logo from '../../../public/images/iletmen-icon.png'; 
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container"> 
        <div className="footer-top">
          <div className="footer-company">
            <div className="footer-logo">
              <span className="logo-icon"><img className='footerLogo' src={logo} alt="" /></span>
    
            </div>
            <p className="company-description">
            Geliştirdiğimiz iş modeli ve yazılım ile, uzman olmadığınız bir konuda çözüm üretmek zorunda kalmayacaksınız.
            </p>
            
            <div className="social-media">
              <h4>Sosyal Medya</h4>
              <div className="social-icons">
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3>Hızlı Erişim</h3>
            <ul>
              <li><Link to="/">Anasayfa</Link></li>
              <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
              <li><Link to="/basinda-biz">Basında Biz</Link></li>
              <li><Link to="/bize-ulasin">Bize Ulaşın</Link></li>
              <li><Link to="/hakkimizda">Hakkımızda</Link></li>
       
            </ul>
          </div>

          <div className="footer-links">
            <h3>Hizmetlerimiz</h3>
            <ul>
              <li><Link to="/iletmen-hizmeti">İletmen Hizmeti</Link></li>
              <li><Link to="/paketim-var">Paketim Var</Link></li>
              <li><Link to="/tek-ekran">Tek Ekran</Link></li>
              <li><Link to="/yazılım-desteği">Yazılım Desteği</Link></li>
              <li><Link to="/mobil-uygulama">Mobil Uygulama</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>İletişim</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <p>İkitelli OSB Mah. YTÜ İkitelli Teknopark Sk. No:1 İç Kapı No:Z15 Başakşehir/İstanbul</p>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>+90 212 982 38 87</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>info@iletmen.com.tr</p>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} İletmen Akıllı Teslimat. Tüm hakları saklıdır.</p>
          <div className="legal-links">
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
            <Link to="/cerez-politikasi">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;