
import './style.css';

const MainContent = () => {
  return (
   <div>
      <section className="iletmen-main-content">
        <div className="container">
          <div className="iletmen-content-grid">
            <div className="iletmen-content-text">
              <h2 className="iletmen-content-title">
                Sizleri kurye operasyonundan kurtarıyoruz
              </h2>
              <p className="iletmen-content-description">
                Sağladığımız platform entegrasyonları ve her gün gelişen yazılım algoritmamız sayesinde, 
                paketinizin en kısa sürede teslim edilmesini sağlayacak İletmeni işletmenize yönlendiriyoruz.
              </p>

              <div className="iletmen-features-grid">
                <div className="iletmen-feature-item">
                  <div className="iletmen-feature-icon">📦</div>
                  <div className="iletmen-feature-content">
                    <h3 className="iletmen-feature-title">İşimiz Nedir</h3>
                    <p className="iletmen-feature-description">
                      Yaptığımız iş paketlerinizi, ürünlerinizi veya siparişlerinizi işletmenizden alıp 
                      müşterilerinize teslim etmektir.
                    </p>
                  </div>
                </div>

                <div className="iletmen-feature-item">
                  <div className="iletmen-feature-icon">⚡</div>
                  <div className="iletmen-feature-content">
                    <h3 className="iletmen-feature-title">Verimli İş Modeli</h3>
                    <p className="iletmen-feature-description">
                      Geliştirdiğimiz iş modeli ve yazılım ile, uzman olmadığınız bir konuda çözüm üretmek 
                      zorunda kalmayacaksınız.
                    </p>
                  </div>
                </div>

                <div className="iletmen-feature-item">
                  <div className="iletmen-feature-icon">🚀</div>
                  <div className="iletmen-feature-content">
                    <h3 className="iletmen-feature-title">Hızlı Teslimat</h3>
                    <p className="iletmen-feature-description">
                      Yazılımımız, rotaya en uygun İLETMEN'e işi yönlendirir, bu sayede ürünlerinizi 
                      en kısa sürede teslim edebiliriz.
                    </p>
                  </div>
                </div>

                <div className="iletmen-feature-item">
                  <div className="iletmen-feature-icon">🔗</div>
                  <div className="iletmen-feature-content">
                    <h3 className="iletmen-feature-title">Platform Entegrasyonları</h3>
                    <p className="iletmen-feature-description">
                      Yemek platformları ile yaptığımız entegrasyonlar sayesinde sizi adres yazarak 
                      iletmen çağırma iş gücünden kurtarıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="iletmen-benefits">
              <h3 className="iletmen-benefits-title">İletmen Varsa Bunlar Yok</h3>
              <div className="iletmen-benefits-list">
                <div className="iletmen-benefit-item">
                  <div className="iletmen-benefit-icon">❌</div>
                  <div className="iletmen-benefit-text">Personel Yönetimi YOK</div>
                </div>
                <div className="iletmen-benefit-item">
                  <div className="iletmen-benefit-icon">❌</div>
                  <div className="iletmen-benefit-text">Operasyonel Yönetim YOK</div>
                </div>
                <div className="iletmen-benefit-item">
                  <div className="iletmen-benefit-icon">❌</div>
                  <div className="iletmen-benefit-text">Operasyon Maliyeti YOK</div>
                </div>
                <div className="iletmen-benefit-item">
                  <div className="iletmen-benefit-icon">❌</div>
                  <div className="iletmen-benefit-text">Sipariş Reddetmek YOK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </div>
 
  );
};

export default MainContent;
