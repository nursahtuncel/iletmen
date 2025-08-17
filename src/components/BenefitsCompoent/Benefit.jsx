import { Zap, BarChart2, Lock, Globe } from 'lucide-react';
import "./Benefit.css";

const Benefit = () => {
  const benefits = [
    {
      icon: <Zap size={32} />,
      title: 'Hızlı Entegrasyon',
      description: '24 saat içinde sisteminize entegre olun'
    },
    {
      icon: <BarChart2 size={32} />,
      title: 'Detaylı Raporlama',
      description: 'Kapsamlı analizler ve performans metrikleri'
    },
    {
      icon: <Lock size={32} />,
      title: 'Güvenli Altyapı',
      description: 'ISO 27001 sertifikalı güvenlik standartları'
    },
    {
      icon: <Globe size={32} />,
      title: '7/24 Destek',
      description: 'Kesintisiz teknik destek ve müşteri hizmetleri'
    }
  ];

  return (
    <section className="hizmetlerimiz__benefits">
      <div className="container">
        <div className="hizmetlerimiz__benefits-header">
          <h2 className="hizmetlerimiz__benefits-title">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="hizmetlerimiz__benefits-subtitle">
            5 yıllık deneyimimizle kanıtlanmış başarılar
          </p>
        </div>
        
        <div className="hizmetlerimiz__benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="hizmetlerimiz__benefit-item">
              <div className="hizmetlerimiz__benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="hizmetlerimiz__benefit-title">
                {benefit.title}
              </h3>
              <p className="hizmetlerimiz__benefit-description">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
