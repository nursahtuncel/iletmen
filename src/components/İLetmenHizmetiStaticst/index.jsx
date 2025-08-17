import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./style.css";

const IletmenHizmetleriStatistics = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="iletmen-stats" ref={statsRef}>
      <div className="container">
        <div className="iletmen-stats-grid">
          <div className="iletmen-stat-item">
            <div className="iletmen-stat-number">
              {statsInView && (
                <CountUp start={0} end={553} duration={2.5} suffix="+" />
              )}
            </div>
            <div className="iletmen-stat-label">Memnun Müşteri</div>
            <div className="iletmen-stat-icon">😊</div>
          </div>

          <div className="iletmen-stat-item">
            <div className="iletmen-stat-number">
              {statsInView && (
                <CountUp
                  start={0}
                  end={5000000}
                  duration={3}
                  separator="."
                  suffix="+"
                />
              )}
            </div>
            <div className="iletmen-stat-label">Taşınmış Paket</div>
            <div className="iletmen-stat-icon">📦</div>
          </div>

          <div className="iletmen-stat-item">
            <div className="iletmen-stat-number">
              {statsInView && (
                <CountUp
                  start={0}
                  end={98}
                  duration={2}
                  suffix="%"
                  decimals={1}
                />
              )}
            </div>
            <div className="iletmen-stat-label">Teslimat Başarısı</div>
            <div className="iletmen-stat-icon">✅</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IletmenHizmetleriStatistics;
