
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Anasayfa from './pages/Anasayfa';
import Hizmetlerimiz from "./pages/Hizmetlerimiz/index"
import BasındaBiz from './pages/BasindaBiz';
import BizeUlasin from './pages/BizeUlasin';
import TekEkran from './pages/TekEkran';
import YazilimDestegi from './pages/YazilimDestegi';
import IletmenHizmeti from './pages/IletmenHizmeti';
import PaketimVar from './pages/PaketimVar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
          <Anasayfa/>
            </>
          } />
          
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="/basinda-biz" element={<BasındaBiz />} />
          <Route path="/bize-ulasin" element={<BizeUlasin />} />
          <Route path="/tek-ekran" element={<TekEkran />} />
          <Route path="/yazılım-desteği" element={<YazilimDestegi />} />
          <Route path="/iletmen-hizmeti" element={<IletmenHizmeti />} />
          <Route path="/paketim-var" element={<PaketimVar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
