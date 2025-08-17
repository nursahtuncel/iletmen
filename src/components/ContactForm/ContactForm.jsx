import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "İletmen Hizmeti",
    "Paketim Var",
    "Tek Ekran",
    "Yazılım Desteği",
    "Mobil Uygulama",
    "Genel Bilgi",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Ad soyad alanı zorunludur";
    if (!formData.email.trim()) newErrors.email = "E-posta alanı zorunludur";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    if (!formData.message.trim()) newErrors.message = "Mesaj alanı zorunludur";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" id="contact">
      <div className="container">
        <div className="contact-form__header">
          <h2 className="contact-form__title">
            <span className="contact-form__title-highlight">Formu Doldur</span>
          </h2>
          <p className="contact-form__subtitle">
            İletmen hizmetleri hakkında detaylı bilgi almak ve ücretsiz demo
            talep etmek için aşağıdaki formu doldurun. En kısa sürede size dönüş
            yapacağız.
          </p>
        </div>

        <div className="contact-form__container">
          <form onSubmit={handleSubmit} className="contact-form__form">
            <div className="contact-form__section">
              <h3 className="contact-form__section-title">Kişisel Bilgiler</h3>
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="name" className="contact-form__label">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`contact-form__input ${
                      errors.name ? "contact-form__input--error" : ""
                    }`}
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                  {errors.name && (
                    <span className="contact-form__error">{errors.name}</span>
                  )}
                </div>
                <div className="contact-form__group">
                  <label htmlFor="email" className="contact-form__label">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`contact-form__input ${
                      errors.email ? "contact-form__input--error" : ""
                    }`}
                    placeholder="ornek@email.com"
                    required
                  />
                  {errors.email && (
                    <span className="contact-form__error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="phone" className="contact-form__label">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="contact-form__input"
                    placeholder="+90 (5XX) XXX XX XX"
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="company" className="contact-form__label">
                    Şirket Adı
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="contact-form__input"
                    placeholder="Şirket adınız"
                  />
                </div>
              </div>
            </div>

            <div className="contact-form__section">
              <h3 className="contact-form__section-title">Hizmet Bilgileri</h3>
              <div className="contact-form__group">
                <label htmlFor="service" className="contact-form__label">
                  İlgilendiğiniz Hizmet
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="contact-form__select"
                >
                  <option value="">Hizmet seçiniz</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact-form__section">
              <h3 className="contact-form__section-title">Mesajınız</h3>
              <div className="contact-form__group">
                <label htmlFor="message" className="contact-form__label">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`contact-form__textarea ${
                    errors.message ? "contact-form__textarea--error" : ""
                  }`}
                  rows="5"
                  placeholder="Hizmetlerimiz hakkında detaylı bilgi almak istiyorum..."
                  required
                ></textarea>
                {errors.message && (
                  <span className="contact-form__error">{errors.message}</span>
                )}
              </div>
            </div>

            <div className="contact-form__submit">
              <button
                type="submit"
                className="btn btn-primary btn-large contact-form__submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="contact-form__status contact-form__status--success">
                <span className="contact-form__status-icon">✅</span>
                <span className="contact-form__status-text">
                  Mesajınız başarıyla gönderildi! En kısa sürede size dönüş
                  yapacağız.
                </span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="contact-form__status contact-form__status--error">
                <span className="contact-form__status-icon">❌</span>
                <span className="contact-form__status-text">
                  Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.
                </span>
              </div>
            )}
          </form>
          <div className="contact-form__info">
            <h3 className="contact-form__info-title">İletişim Bilgileri</h3>
            <div className="contact-form__info-list">
              <div className="contact-form__info-item">
                <MapPin size={24} className="contact-form__info-icon" />
                <div className="contact-form__info-content">
                  <h4>Adres</h4>
                  <p>
                    İkitelli OSB Mah. YTÜ İkitelli Teknopark Sk. No:1 İç Kapı
                    No:Z15 Başakşehir/İstanbul
                  </p>
                </div>
              </div>

              <div className="contact-form__info-item">
                <Phone size={24} className="contact-form__info-icon" />
                <div className="contact-form__info-content">
                  <h4>Telefon</h4>
                  <p>+90 212 982 38 87</p>
                </div>
              </div>

              <div className="contact-form__info-item">
                <Mail size={24} className="contact-form__info-icon" />
                <div className="contact-form__info-content">
                  <h4>E-posta</h4>
                  <p>info@iletmen.com.tr</p>
                </div>
              </div>

              <div className="contact-form__info-item">
                <Clock size={24} className="contact-form__info-icon" />
                <div className="contact-form__info-content">
                  <h4>Çalışma Saatleri</h4>
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
