import "./style.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer.jsx";
import Services from "../../components/Services/Services.jsx";
import HeroServices from "../../components/HeroServices/HeroServices.jsx";
import Benefit from "../../components/BenefitsCompoent/Benefit.jsx";

const Hizmetlerimiz = () => {
  return (
    <div>
      <Navbar />
      <HeroServices />
      <Services />
      <Benefit />
      <Footer />
    </div>
  );
};

export default Hizmetlerimiz;
