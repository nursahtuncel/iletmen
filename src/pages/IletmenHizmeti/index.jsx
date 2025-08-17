
import './İletmenHizmeti.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Statistics from '../../components/İLetmenHizmetiStaticst/index.jsx';
import Heroİletmen from '../../components/HeroİLetmen/index.jsx';
import MainContent from '../../components/MainContent/index.jsx';
import FormİLetmen from '../../components/Formİletmen/index.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const İletmenHizmeti = () => {

  return (
   
    <div className="iletmen-hizmeti-page"> 
    <Navbar/>
     <Heroİletmen/>
     <Statistics/> 
     <MainContent/>
     <FormİLetmen/>
    <Footer/>
    </div>
  );
};

export default İletmenHizmeti;
