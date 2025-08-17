import React, { useState, useEffect, useRef } from 'react';
import { FaSmile, FaBuilding, FaBox, FaStar } from "react-icons/fa";
import './Statistics.css';

const Statistics = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    companies: 0,
    deliveries: 0,
    satisfaction: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const statsData = [
    {
      id: 'customers',
      number: 553,
      suffix: '+',
      label: 'Memnun Müşteri',
      icon: <FaSmile />,
      description: 'Başarıyla hizmet verdiğimiz müşteri sayısı',
      color: 'primary',
      emphasis: 'high'
    },
    {
      id: 'companies',
      number: 474,
      suffix: '+',
      label: 'İletmen',
      icon: <FaBuilding />,
      description: 'Sistemimizi kullanan şirket sayısı',
      color: 'accent',
      emphasis: 'highest'
    },
    {
      id: 'deliveries',
      number: 1000000,
      suffix: '+',
      label: 'Başarılı Teslimat',
      icon: <FaBox />,
      description: 'Tamamlanan teslimat işlemi sayısı',
      color: 'success',
      emphasis: 'high'
    },
    {
      id: 'satisfaction',
      number: 98,
      suffix: '%',
      label: 'Müşteri Memnuniyeti',
      icon: <FaStar />,
      description: 'Müşteri memnuniyet oranı',
      color: 'warning',
      emphasis: 'medium'
    }
  ];

  const animateCounter = (target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); 
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setCounters(prev => ({
        ...prev,
        [target === 1000000 ? 'deliveries' : 
         target === 553 ? 'customers' :
         target === 474 ? 'companies' : 'satisfaction']: Math.floor(current)
      }));
    }, 16);

    return timer;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => animateCounter(553), 100);
          setTimeout(() => animateCounter(474), 300);
          setTimeout(() => animateCounter(1000000), 500);
          setTimeout(() => animateCounter(98), 700);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const getEmphasisClass = (emphasis) => {
    switch (emphasis) {
      case 'highest': return 'statistics__item--highest-emphasis';
      case 'high': return 'statistics__item--high-emphasis';
      case 'medium': return 'statistics__item--medium-emphasis';
      default: return '';
    }
  };
  
  const getColorClass = (color) => {
    return `statistics__item--${color}`;
  };

  return (
    <section className="statistics" id="statistics" ref={sectionRef}>
      <div className="statistics__background-pattern"></div>
      
      <div className="container">
        <div className="statistics__header">
          <h2 className="statistics__title">
            <span className="statistics__title-highlight">Rakamlarla</span> İletmen
          </h2>
        </div>
        
        <div className="statistics__grid">
          {statsData.map((stat, index) => (
            <div 
              key={stat.id}
              className={`statistics__item ${getEmphasisClass(stat.emphasis)} ${getColorClass(stat.color)}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="statistics__icon">
                <span className="statistics__icon-emoji">{stat.icon}</span>
                <div className="statistics__icon-glow"></div>
              </div>
              
              <div className="statistics__number">
                <span className="statistics__number-value">
                  {formatNumber(counters[stat.id])}
                </span>
                <span className="statistics__suffix">{stat.suffix}</span>
                <div className="statistics__number-shadow"></div>
              </div>
            
              <div className="statistics__label">{stat.label}</div>
              <div className="statistics__description">{stat.description}</div>
     
              <div className="statistics__progress">
                <div 
                  className="statistics__progress-bar"
                  style={{ 
                    width: isVisible ? `${Math.min((counters[stat.id] / stat.number) * 100, 100)}%` : '0%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
     
        <div className="statistics__info">
          <div className="statistics__info-item">
            <span className="statistics__info-icon">🚀</span>
            <span className="statistics__info-text">
              <strong>5 yıldır</strong> sektörde hizmet veriyoruz
            </span>
          </div>
          <div className="statistics__info-item">
            <span className="statistics__info-icon">🌍</span>
            <span className="statistics__info-text">
              <strong>81 ilde</strong> aktif müşteri ağımız var
            </span>
          </div>
          <div className="statistics__info-item">
            <span className="statistics__info-icon">⚡</span>
            <span className="statistics__info-text">
              <strong>%40'a kadar</strong> teslimat süresi optimizasyonu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
