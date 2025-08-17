import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormIletmen.css';

const FormIletmen = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    city: '',
    district: '',
    contactPerson: '',
    phone: '',
    email: '',
    monthlyPackages: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1500);
  };

  return (
    <section className="iletmen-application" id="application-form">
      <div className="container">
        <h2 className="iletmen-application-title">İşletmenizde İletmen İhtiyacınız İçin Formu Doldurun</h2>
        <p className="iletmen-application-description">
          Doldurduğunuz bilgiler doğrultusunda sistem tarafından bilgileriniz satış ekibimize iletilecektir.
        </p>

        {submitStatus === 'success' && (
          <div className="iletmen-form-message success">
            <span>✅</span> Başvurunuz başarıyla alındı!
          </div>
        )}

        <form className="iletmen-form" onSubmit={handleSubmit}>
          <div className="iletmen-form-grid">
            <div className="form-group">
              <label>İşletmenizin Adı *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>İşletmenizin İli *</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              >
                <option value="">İl seçiniz</option>
                {cities.map((city, i) => (
                  <option key={i} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>İşletmenizin İlçesi</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>İletişim Kişisi *</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Telefon *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>E-posta *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Aylık Paket Sayısı</label>
              <input
                type="text"
                name="monthlyPackages"
                value={formData.monthlyPackages}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-terms">
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                required
              />
              Bu formu onaylayarak <Link to="/gizlilik-politikasi">Gizlilik Politikasını</Link>, <Link to="/kvkk-politikasi">KVKK Politikası</Link> ve <Link to="/kvkk-saklama">KVKK Saklama ve İmha Politikasını</Link> okuduğumu ve anladığımı teyit ederim.
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary basvur-btn">
            {isSubmitting ? 'Gönderiliyor...' : 'BAŞVUR'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormIletmen;
