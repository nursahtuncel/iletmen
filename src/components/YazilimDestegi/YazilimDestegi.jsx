import "./YazilimDestegi.css";
import photo from "./../../../public/images/yazilim-destegi.png";
const YazilimDestegi = () => {
  return (
    <section className="yazilim-destegi">
      <div className="yazilim-destegi__text">
        <h2>
          Paket servis  operasyonunuz için yazılım  desteği mi{" "}
         arıyorsunuz?
        </h2>
        <p>
          Müşterilerinize İletmen yazılımını kullandırarak <br /> operasyondan
          ve iş gücünden tasarruf sağlayabilirsiniz. <br />
          Ayrıntılı bilgi almak için formu doldurun.
        </p>
        <a href="/iletisim" className="primary-btn">
          Bizimle İletişime Geçin
        </a>
      </div>

      <div className="yazilim-destegi__image">
        <img src={photo} alt="Yazılım Desteği" />
      </div>
    </section>
  );
};

export default YazilimDestegi;
