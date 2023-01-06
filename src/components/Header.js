import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [openBurger, setOpenBurger] = useState(true);
  console.log(openBurger);
  return (
    <header className="header">
      <a
        className="header-ad"
        target="_blank"
        href="https://club.prensa.com/establecimientos/local/novey/?utm_source=PrensaCom&utm_medium=TopBar&utm_campaign=Beneficio_Novey"
        rel="noreferrer"
      >
        <button>
          <img
            className="header-ad__img"
            src="./assets/header/novey.png"
            alt="novey"
          />
          <span className="header-ad__text">
            Recibe{' '}
            <span className="header-ad__text header-ad__text_mark">
              {' '}
              10% de descuento
            </span>{' '}
            si eres suscriptor de La Prensa.
          </span>
        </button>
      </a>
      <div className="wrapper header-wrapper">
        <div className="header-wrapper__links">
          {openBurger ? (
            <button onClick={() => setOpenBurger(false)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          ) : (
            <button onClick={() => setOpenBurger(true)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          )}
          <a
            href="https://www.prensa.com/buscador/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="ico-search" icon={faSearch} />
          </a>

          <a
            href="https://twitter.com/prensacom"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ico"
              src="./assets/header/icon-twitter.png"
              alt="icon-twitter"
            />
          </a>

          <a
            href="https://www.facebook.com/prensacom"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ico"
              src="./assets/header/icon-facebook.png"
              alt="icon-facebook"
            />
          </a>

          <a
            href="https://www.instagram.com/prensacom/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="ico"
              src="./assets/header/icon-instagram.png"
              alt="icon-instagram"
            />
          </a>
          <p className="article-date">Panamá, 06 de enero del 2023</p>
        </div>
        <div className="header-wrapper__logo">
          <a href="https://www.prensa.com/" target="_blank" rel="noreferrer">
            <img
              src="./assets/header/logo_laprensa_panama.svg"
              alt="laprensa panama"
            />
          </a>
        </div>
        <div className="header-wrapper__buttons">
          <button className="button button_bordered">Inicia Sesión</button>
          <button className="button button_colored">Suscríbete desde $1</button>
          <a
            className="link"
            href="https://multimedia.corprensa.com/multimedia/ediciones/la_prensa/2023-01-06/"
            target="_blank"
            rel="noreferrer"
          >
            ePaper
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
