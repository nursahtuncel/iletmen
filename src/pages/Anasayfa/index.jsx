import "./style.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Features from "../../components/FeaturesComponent";
import Statistics from "../../components/Statistics/Statistics";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import ServiceOffer from "../../components/ServiceOfferCompoent";
import YazilimDestegi from "../../components/YazilimDestegi/YazilimDestegi";
import HizmetlerimizCTA from "../../components/HizmetlerimizCTA/HizmetlerimizCTA";

const Anasayfa = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ServiceOffer />
      <HizmetlerimizCTA />
      <Features />
      <Statistics />
      <YazilimDestegi />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Anasayfa;
