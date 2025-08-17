import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../public/images/iletmen-icon.png';
import Flag1 from '../../../public/images/turkey.png';
import Flag2 from '../../../public/images/united-kingdom.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('TR');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'TR' ? 'EN' : 'TR');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbarScrolled' : ''}`}>
      <nav className="navbarContainer">
        {/* Logo */}
        <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
          <div className="navbarLogoIcon">
            <img className="iletmenLogo" src={logo} alt="İletmen Logo" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbarMenu">
          <li>
            <Link
              to="/"
              className={`navbarLink ${isActiveLink('/') ? 'navbarLinkActive' : ''}`}
              onClick={closeMobileMenu}
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              to="/hizmetlerimiz"
              className={`navbarLink ${isActiveLink('/hizmetlerimiz') ? 'navbarLinkActive' : ''}`}
              onClick={closeMobileMenu}
            >
              Hizmetlerimiz
            </Link>
          </li>
          <li>
            <Link
              to="/basinda-biz"
              className={`navbarLink ${isActiveLink('/basinda-biz') ? 'navbarLinkActive' : ''}`}
              onClick={closeMobileMenu}
            >
              Basında Biz
            </Link>
          </li>
          <li>
            <Link
              to="/bize-ulasin"
              className={`navbarLink ${isActiveLink('/bize-ulasin') ? 'navbarLinkActive' : ''}`}
              onClick={closeMobileMenu}
            >
              Bize Ulaşın
            </Link>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="navbarActions">
          {/* Language Switch */}
          <button
            className="navbarLanguageSwitch"
            onClick={toggleLanguage}
            aria-label="Dil değiştir" >
            {currentLang === 'TR' ?   <img className='navbarFlag' src={Flag1} alt="" /> :   <img className='navbarFlag' src={Flag2} alt="" />}
          </button>

          <button className="btn btnSecondary navbarLoginBtn">
            Üye Girişi
          </button>

          <button
            className="navbarMobileToggle"
            onClick={toggleMobileMenu}
            aria-label="Menüyü aç/kapat"
          >
            <span className={`navbarHamburger ${isMobileMenuOpen ? 'navbarHamburgerOpen' : ''}`}></span>
            <span className={`navbarHamburger ${isMobileMenuOpen ? 'navbarHamburgerOpen' : ''}`}></span>
            <span className={`navbarHamburger ${isMobileMenuOpen ? 'navbarHamburgerOpen' : ''}`}></span>
          </button>
        </div>
      </nav>


      <div className={`navbarMobileMenu ${isMobileMenuOpen ? 'navbarMobileMenuOpen' : ''}`}>
        <ul className="navbarMobileMenuList">
          <li>
            <Link to="/" className="navbarMobileLink" onClick={closeMobileMenu}>
              Anasayfa
            </Link>
          </li>
          <li>
            <Link to="/hizmetlerimiz" className="navbarMobileLink" onClick={closeMobileMenu}>
              Hizmetlerimiz
            </Link>
          </li>
          <li>
            <Link to="/basinda-biz" className="navbarMobileLink" onClick={closeMobileMenu}>
              Basında Biz
            </Link>
          </li>
          <li>
            <Link to="/bize-ulasin" className="navbarMobileLink" onClick={closeMobileMenu}>
              Bize Ulaşın
            </Link>
          </li>
        </ul>

  
      </div>
    </header>
  );
};

export default Navbar;
