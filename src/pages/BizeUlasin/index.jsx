import "./style.css";
import BizeUlasinComponent from "../../components/BizeUlasinComponent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const BizeUlasin = () => {
  return (
    <div>
      <Navbar />
      <BizeUlasinComponent />
      <Footer />
    </div>
  );
};

export default BizeUlasin;
