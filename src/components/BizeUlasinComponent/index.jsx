import React, { useState } from "react";
import "./style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [activeTab, setActiveTab] = useState("form");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
    });


    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Adres",
      content:
        "İkitelli OSB Mah. YTÜ İkitelli Teknopark Sk. No:1 İç Kapı No:Z15 Başakşehir/İstanbul",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Telefon",
      content: "+90 212 982 38 87",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "E-posta",
      content: "info@iletmen.com.tr",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
    },
  ];

  const services = [
    "İletmen Başvuru",
    "Tek Ekran",
    "Yazılım Desteği",
    "Genel Bilgi",
  ];

  return (
    <div className="modern-contact">
      {/* Hero Section */}
      <section className="modern-contact__hero">
        <div className="modern-contact__hero-overlay"></div>
        <div className="container">
          <div className="modern-contact__hero-content">
            <h1 className="modern-contact__hero-title">
              <span className="hero_span">Bizimle</span> İletişime Geçin
            </h1>
            {/* <p className="modern-contact__hero-subtitle">
              Sorularınız için buradayız. Size yardımcı olmaktan mutluluk duyarız.
            </p> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="modern-contact__main">
        <div className="container">
          <div className="modern-contact__tabs">
            <button
              className={`modern-contact__tab ${
                activeTab === "form" ? "active" : ""
              }`}
              onClick={() => setActiveTab("form")}
            >
              Mesaj Gönder
            </button>
            <button
              className={`modern-contact__tab ${
                activeTab === "info" ? "active" : ""
              }`}
              onClick={() => setActiveTab("info")}
            >
              İletişim Bilgileri
            </button>
            <button
              className={`modern-contact__tab ${
                activeTab === "map" ? "active" : ""
              }`}
              onClick={() => setActiveTab("map")}
            >
              Konumumuz
            </button>
          </div>

          <div className="modern-contact__content">
            {activeTab === "form" && (
              <div className="modern-contact__form-container">
                <h2 className="modern-contact__form-title">Bize Ulaşın</h2>
                <p className="modern-contact__form-subtitle">
                  Aşağıdaki formu doldurarak bizimle iletişime
                  geçebilirsiniz.iletmen kuryesi olmak için lütfen
                  <br />
                  <a className="iletmen-basvuru" href="">
                    iletmen başvuru
                  </a>{" "}
                  ekranını kullanın. En kısa sürede size ulaşacağız..
                </p>

                <form onSubmit={handleSubmit} className="modern-contact__form">
                  <div className="modern-contact__form-row">
                    <div className="modern-contact__form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="modern-contact__form-input"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="modern-contact__form-label"
                      >
                        Ad Soyad *
                      </label>
                    </div>

                    <div className="modern-contact__form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="modern-contact__form-input"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="modern-contact__form-label"
                      >
                        E-posta *
                      </label>
                    </div>
                  </div>

                  <div className="modern-contact__form-row">
                    <div className="modern-contact__form-group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="modern-contact__form-input"
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className="modern-contact__form-label"
                      >
                        Telefon
                      </label>
                    </div>

                    <div className="modern-contact__form-group">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="modern-contact__form-input"
                        placeholder=" "
                      />
                      <label
                        htmlFor="company"
                        className="modern-contact__form-label"
                      >
                        Şirket Adı
                      </label>
                    </div>
                  </div>
                  <div className="modern-contact__form-group">
                    <div className="modern-contact__select-wrapper">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="modern-contact__form-select"
                        required
                      >
                        <option value="" disabled selected hidden>
                          Hizmet seçiniz
                        </option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="modern-contact__form-group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="modern-contact__form-textarea"
                      rows="5"
                      placeholder=" "
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="modern-contact__form-label"
                    >
                      Mesajınız *
                    </label>
                  </div>

                  {formStatus.submitted && (
                    <div
                      className={`modern-contact__form-message ${
                        formStatus.success ? "success" : "error"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}

                  <button type="submit" className="modern-contact__form-submit">
                    <span>Mesaj Gönder</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              </div>
            )}

            {activeTab === "info" && (
              <div className="modern-contact__info-container">
                <h2 className="modern-contact__info-title">
                  İletişim Bilgilerimiz
                </h2>
                <p className="modern-contact__info-subtitle">
                  Size en hızlı şekilde ulaşabilmemiz için aşağıdaki iletişim
                  kanallarını kullanabilirsiniz.
                </p>

                <div className="modern-contact__info-grid">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="modern-contact__info-card">
                      <div className="modern-contact__info-icon">
                        {info.icon}
                      </div>
                      <div className="modern-contact__info-content">
                        <h3 className="modern-contact__info-card-title">
                          {info.title}
                        </h3>
                        <p className="modern-contact__info-card-text">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="modern-contact__social-section">
                  <h3 className="modern-contact__social-title">
                    Sosyal Medya Hesaplarımız
                  </h3>
                  <div className="modern-contact__social-links">
                    <a
                      href="#"
                      className="modern-contact__social-link"
                      aria-label="LinkedIn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="modern-contact__social-link"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="modern-contact__social-link"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="modern-contact__social-link"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "map" && (
              <div className="modern-contact__map-container">
                <h2 className="modern-contact__map-title">Ofis Konumumuz</h2>
                <p className="modern-contact__map-subtitle">
                  İstanbul merkez ofisimizi ziyaret edebilir veya online görüşme
                  talep edebilirsiniz.
                </p>

                <div className="modern-contact__map-wrapper">
                  <div className="modern-contact__map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.7363117278846!2d28.79470517551746!3d41.07475621532966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa58eec4599bb%3A0x762f8953c3292b20!2zxLBraXRlbGxpIE9TQiwgxLBraXRlbGxpIENkIE5vOiAxLCAzNDQ5MCBCYcWfYWvFn2VoaXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1755436443638!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="İletmen Ofis Konumu"
                    />
                  </div>

                  <div className="modern-contact__map-info">
                    <h3 className="modern-contact__map-info-title">
                      Ziyaret Saatleri
                    </h3>
                    <p className="modern-contact__map-info-text">
                      Ofis ziyaretleri için önceden randevu almanızı rica
                      ederiz.
                    </p>

                    <div className="modern-contact__map-hours">
                      <div className="modern-contact__map-hour-item">
                        <span>Pazartesi - Cuma</span>
                        <span>09:00 - 18:00</span>
                      </div>
                      <div className="modern-contact__map-hour-item">
                        <span>Cumartesi</span>
                        <span>10:00 - 15:00</span>
                      </div>
                      <div className="modern-contact__map-hour-item">
                        <span>Pazar</span>
                        <span>Kapalı</span>
                      </div>
                    </div>

                    <button className="modern-contact__map-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Yol Tarifi Al</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
