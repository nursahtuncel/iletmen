import "./style.css";
import service1 from "./../../../public/images/services-1.png";
import service2 from "./../../../public/images/services-2.png";
import service3 from "./../../../public/images/services-3.png";

const Features = () => {
  return (
    <>

      <section className="anasayfa__features">
        <div className="container">
          <div className="anasayfa__features-header">
            <h2 className="anasayfa__features-title">Neden İletmen?</h2>
            <p className="anasayfa__features-subtitle">
              Sektörde 5 yıllık deneyimimizle, işletmenizi bir üst seviyeye
              taşıyoruz
            </p>
          </div>

          <div className="anasayfa__features-grid">
            <div className="anasayfa__feature-item">
              <div className="anasayfa__feature-icon">
                <img src={service1} alt="Hızlı Teslimat" />
              </div>
              <h3 className="anasayfa__feature-title">Hızlı Teslimat</h3>
              <p className="anasayfa__feature-description">
                Yazılımımız, rotaya en uygun İLETMEN’e işi yönlendirir, bu
                sayede ürünlerinizi en kısa sürede teslim edebiliriz. Hızlı ve
                güvenli teslimat hizmetimizle tanışmak için bizimle iletişime
                geçin.
              </p>
            </div>

            <div className="anasayfa__feature-item">
              <div className="anasayfa__feature-icon">
                <img src={service2} alt="Detaylı Raporlama" />
              </div>
              <h3 className="anasayfa__feature-title">Detaylı Raporlama</h3>
              <p className="anasayfa__feature-description">
                Entegre platformlardan ve iletmenlerinizden elde edilen
                verilerle işletmenize özel hazırlanmış raporları görüntüleyin.
                Bu raporlar işletmenizin veriye dayalı kararlar vermesine ve
                başarısını artırmasına yardımcı olur.
              </p>
            </div>

            <div className="anasayfa__feature-item">
              <div className="anasayfa__feature-icon">
                  <img src={service1} alt="Mobil Uygulama" />
              </div>
              <h3 className="anasayfa__feature-title">
                Otomatik Optimizasyon
              </h3>
              <p className="anasayfa__feature-description">
                AI destekli algoritmalar ile teslimat rotalarını otomatik olarak
                optimize edin.
              </p>
            </div>

            <div className="anasayfa__feature-item">
              <div className="anasayfa__feature-icon">
                <img src={service3} alt="Entegrasyon" />
              </div>
              <h3 className="anasayfa__feature-title">Entegrasyon</h3>
              <p className="anasayfa__feature-description">
                Yemek ve e-ticaret platformlarıyla entegre çalışarak,
                paketlerinizi en kısa sürede teslim ederiz. İletmen,
                platformlardaki paketlerinizin durumunu otomatik olarak
                günceller, böylece ek bir iş yükünden kurtulursunuz.
              </p>
            </div>

            <div className="anasayfa__feature-item">
              <div className="anasayfa__feature-icon">
                <img src={service1} alt="Mobil Uygulama" />
              </div>
              <h3 className="anasayfa__feature-title">7/24 Destek</h3>
              <p className="anasayfa__feature-description">
                Sürücüler ve müşteriler için özel geliştirilmiş mobil
                uygulamalar.
              </p>
            </div>
            
            <div className="anasayfa__feature-item">
              <div className="anasayfa__feature-icon">
                <img src={service1} alt="Mobil Uygulama" />
              </div>
              <h3 className="anasayfa__feature-title">Mobil Uygulama</h3>
              <p className="anasayfa__feature-description">
                Sürücüler ve müşteriler için özel geliştirilmiş mobil
                uygulamalar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
