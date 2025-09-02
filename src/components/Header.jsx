import CV from '../assets/images/CVChemsedineBENHADDOU.pdf';
import { useEffect, useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={scrolled ? 'window-scroll' : ''}
      style={{ transition: 'background-color 0.4s ease, box-shadow 0.4s ease' }}
    >
      <div className="container nav__container">
        <a href="#accueil" className="nav__logo">
          <h3 style={{ color: scrolled ? 'white' : 'black', transition: 'color 0.4s ease' }}>
            PORTFOLIO
          </h3>
        </a>
        <ul className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
          <li>
            <a href="#accueil" className="nb_a" onClick={() => setShowMenu(false)}>
              ACCUEIL
            </a>
          </li>
          <li>
            <a href="#experiences" className="nb_a" onClick={() => setShowMenu(false)}>
              EXPÉRIENCES
            </a>
          </li>
          <li>
            <a href="#formations" className="nb_a" onClick={() => setShowMenu(false)}>
              FORMATIONS
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nb_a" onClick={() => setShowMenu(false)}>
              PROJETS
            </a>
          </li>
          <li>
            <a href="#competences" className="nb_a" onClick={() => setShowMenu(false)}>
              COMPÉTENCES
            </a>
          </li>
          <li>
            <a href="#contact" className="nb_a" onClick={() => setShowMenu(false)}>
              CONTACT
            </a>
          </li>
          <li>
            <a href={CV} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-download-alt"></i> CV
            </a>
          </li>
        </ul>
        <button id="open-menu-btn" onClick={() => setShowMenu(true)}>
          <i className="uil uil-bars"></i>
        </button>
        <button id="close-menu-btn" onClick={() => setShowMenu(false)}>
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;
