import { Link } from 'react-router-dom';
import { FaTruck, FaBox, FaDesktop, FaLaptopCode } from 'react-icons/fa'; 
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'iletmen-hizmeti',
      title: 'İletmen Hizmeti',
      description: 'Kapsamlı teslimat yönetim sistemi ile tüm süreçlerinizi tek platformda yönetin.',
      icon: <FaTruck />,
      features: [
        'Gerçek zamanlı takip',
        'Rota optimizasyonu',
        'Müşteri bildirimleri',
        'Raporlama ve analiz'
      ],
      link: '/iletmen-hizmeti',
      color: 'primary'
    },
    {
      id: 'paketim-var',
      title: 'Paketim Var',
      description: 'Bireysel kullanıcılar için hızlı ve güvenli paket teslimat hizmeti.',
      icon: <FaBox />, 
      features: [
        'Anında fiyat hesaplama',
        'Hızlı teslimat seçenekleri',
        'Güvenli ödeme',
        '7/24 destek'
      ],
      link: '/paketim-var',
      color: 'secondary'
    },
    {
      id: 'tek-ekran',
      title: 'Tek Ekran',
      description: 'Tüm operasyonlarınızı tek ekrandan yönetin ve verimliliğinizi artırın.',
      icon: <FaDesktop />, 
      features: [
        'Unified dashboard',
        'Entegre sistemler',
        'Gerçek zamanlı veriler',
        'Kolay kullanım'
      ],
      link: '/tek-ekran',
      color: 'accent'
    },
    {
      id: 'yazilim-destegi',
      title: 'Yazılım Desteği',
      description: 'Mevcut sistemlerinize entegrasyon ve özel yazılım geliştirme hizmetleri.',
      icon: <FaLaptopCode />, 
      features: [
        'API entegrasyonu',
        'Özel geliştirme',
        'Teknik destek',
        'Eğitim ve danışmanlık'
      ],
      link: '/yazılım-desteği',
      color: 'success'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">
            <span className="services__title-highlight">Hizmetlerimiz</span>
          </h2>
          <p className="services__subtitle">
            Yaptığımız iş paketlerinizi, ürünlerinizi veya siparişlerinizi işletmenizden alıp müşterilerinize teslim etmektir.
          </p>
        </div>
  
        <div className="services__grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`services__item services__item--${service.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="services__icon">
                <span className="services__icon-emoji">{service.icon}</span>
              </div>
            
              <div className="services__content">
                <h3 className="services__item-title">
                  {service.title}
                </h3>
                
                <p className="services__item-description">
                  {service.description}
                </p>
               
                <ul className="services__features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="services__feature">
                      <span className="services__feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
       
              <div className="services__action">
                <Link to={service.link} className="services__link">
                  Detayları Gör
                  <span className="services__link-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
   
      </div>
    </section>
  );
};

export default Services;
