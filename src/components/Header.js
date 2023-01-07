import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';

const Header = () => {
  const [openBurger, setOpenBurger] = useState(true);
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
      <div
        className={`wrapper header-wrapper ${
          openBurger ? '' : 'burger-active'
        }`}
      >
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
          {openBurger ? (
            <p className="article-date">Panamá, 06 de enero del 2023</p>
          ) : (
            ''
          )}
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
          {openBurger ? (
            <a
              className="link"
              href="https://multimedia.corprensa.com/multimedia/ediciones/la_prensa/2023-01-06/"
              target="_blank"
              rel="noreferrer"
            >
              ePaper
            </a>
          ) : (
            ''
          )}
        </div>
        {!openBurger ? (
          <div className="link-items layout-3-column">
            <div className="link-items__column">
              <h4 className="link-items__heading">SECCIONES</h4>
              <div>
                <a className="link" href="https://www.prensa.com/">
                  Portada
                </a>
                <a className="link" href="https://www.prensa.com/locales/">
                  Locales
                </a>
                <a className="link" href="https://www.prensa.com/sociedad/">
                  Sociedad
                </a>
                <a className="link" href="https://www.prensa.com/provincias/">
                  Provincias
                </a>
                <a className="link" href="https://www.prensa.com/judiciales/">
                  Judiciales
                </a>
                <a className="link" href="https://www.prensa.com/politica/">
                  Política
                </a>
                <a className="link" href="https://www.prensa.com/economia/">
                  Economía
                </a>
                <a className="link" href="https://www.prensa.com/mundo/">
                  Mundo
                </a>
                <a className="link" href="https://www.prensa.com/deportes/">
                  Deportes
                </a>
                <a className="link" href="https://www.prensa.com/vivir/">
                  Vivir+
                </a>
                <a className="link" href="https://www.prensa.com/status-k/">
                  Status K
                </a>
                <a className="link" href="https://www.prensa.com/opinion/">
                  Opinión
                </a>
                <a className="link" href="https://www.prensa.com/blogs/">
                  Blogs
                </a>
                <a className="link" href="https://www.prensa.com/podcasts/">
                  Podcasts
                </a>
                <a className="link" href="https://www.prensa.com/fotogalerias/">
                  Fotografía
                </a>
                <a className="link" href="https://www.prensa.com/videos/">
                  Videos
                </a>
                <a className="link" href="https://www.prensa.com/infografias/">
                  Infografias
                </a>
                <a className="link" href="https://www.prensa.com/correcciones/">
                  Correcciones
                </a>
              </div>
            </div>
            <div className="link-items__column">
              <h4 className="link-items__heading">SERVICIOS</h4>
              <div>
                <a
                  className="link"
                  href="https://multimedia.corprensa.com/multimedia/ediciones/la_prensa/2023-01-06/"
                >
                  ePaper
                </a>
                <a className="link" href="https://www.prensa.com/buscador/">
                  Buscador
                </a>
                <a
                  className="link"
                  href="https://www.prensa.com/autor/Corprensa%20Content%20Studio/"
                >
                  Corprensa Content Studio
                </a>
                <a
                  className="link"
                  href="https://www.prensa.com/contenido-patrocinado/"
                >
                  Contenido patrocinado
                </a>
                <a
                  className="link"
                  href="https://www.prensa.com/resena-digital/"
                >
                  Reseña Digital
                </a>
                <a className="link" href="https://www.prensa.com/comunicados/">
                  Comunicados
                </a>
                <a className="link" href="https://www.prensa.com/catalogos/">
                  Catálogos y Otras Publicaciones
                </a>
                <a className="link" href="https://www.prensa.com/loterias/">
                  Lotería
                </a>
                <a className="link" href="https://www.prensa.com/horoscopo/">
                  Horóscopo
                </a>
                <a
                  className="link"
                  href="https://suscribete.prensa.com/kiosco/?_gl=1*1g03922*_ga*Mzk4NTI3MDQwLjE2NzI5MzE4MjM.*_ga_D6E1T76QJ4*MTY3MzAwNjExMC44LjAuMTY3MzAwNjEyMi40OC4wLjA."
                >
                  Kiosco Digital
                </a>
                <a className="link" href="https://www.prensa.com/luctuosas/">
                  Luctuosas
                </a>
                <a className="link" href="https://www.prensa.com/cine/">
                  Cine
                </a>
                <a className="link" href="https://www.prensa.com/arcio/rss/">
                  RSS
                </a>
                <a className="link" href="https://www.prensa.com/temas/">
                  Temas
                </a>
                <a className="link" href="https://www.prensa.com/autores/">
                  Autores
                </a>
                <a
                  className="link"
                  href="https://www.prensa.com/notas-al-lector/"
                >
                  Notas al lector
                </a>
                <a
                  className="link"
                  href="https://www.prensa.com/buenas-practicas/"
                >
                  Buenas prácticas
                </a>
              </div>
            </div>
            <div className="link-items__column">
              <h4 className="link-items__heading">OTROS SITIOS</h4>
              <div>
                <a
                  className="link"
                  href="https://www.asistentefinanciero.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Asistente Financiero
                </a>
                <a
                  className="link"
                  href="https://www.metropormetro.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Metro por Metro
                </a>
                <a
                  className="link"
                  href="https://www.tiendapanama.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Tienda Panamá
                </a>
                <a
                  className="link"
                  href="https://www.tustiquetes.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Tus Tiquetes
                </a>
                <a
                  className="link"
                  href="https://www.cerokm.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Cero KM
                </a>
                <a
                  className="link"
                  href="http://corporativo.prensa.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Corprensa
                </a>
                <a
                  className="link"
                  href="https://www.midiario.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Mi Diario
                </a>
                <a
                  className="link"
                  href="https://www.martesfinanciero.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Martes Financiero
                </a>
                <a
                  className="link"
                  href="https://www.ellas.pa/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Ellas
                </a>
                <a
                  className="link"
                  href="https://club.prensa.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Club La Prensa
                </a>
                <a
                  className="link"
                  href="https://buscafacil.com/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  Busca Fácil
                </a>
                <a
                  className="link"
                  href="https://www.alamesa.pa/?utm_source=prensacom&utm_medium=burger-menu&utm_campaign=referral"
                >
                  A la Mesa
                </a>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
