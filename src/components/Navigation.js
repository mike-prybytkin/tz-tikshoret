import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [openDropDownList, setOpenDropDownList] = useState(false);
  const [dropDownName, setDropDownName] = useState('Locales');

  const dropdownListToggle = (e) => {
    setDropDownName('');
    const targetDropDownName = e.target.textContent;
    if (targetDropDownName === 'Locales') {
      setDropDownName(targetDropDownName);
    } else if (targetDropDownName === 'Economía') {
      setDropDownName(targetDropDownName);
    } else if (targetDropDownName === 'Multimedia') {
      setDropDownName(targetDropDownName);
    }
    setOpenDropDownList(!openDropDownList);
  };

  const popularNewsListener = (e) => {
    if (e.relatedTarget.classList.contains('dropdown-list')) {
      setOpenDropDownList(true);
    }
  } 

  const closeDropDownList = () => {
    setOpenDropDownList(false);
  }
  return (
    <div className="wrapper nav-wrapper">
      <nav className={`nav ${openDropDownList ? 'dropdown-active' : ''}`}>
        <ul className="nav__items">
          <li
            className="nav__item dropdown-list"
            onMouseEnter={dropdownListToggle}
            onMouseLeave={dropdownListToggle}
          >
            <span>Locales</span>
          </li>
          <FontAwesomeIcon className="fontawersome-ico" icon={faCaretDown} />
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/judiciales/">
              Judiciales
            </a>
          </li>
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/politica/">
              Politica
            </a>
          </li>
          <li
            className="nav__item dropdown-list"
            onMouseEnter={dropdownListToggle}
            onMouseLeave={dropdownListToggle}
          >
            <span>Economía</span>
          </li>
          <FontAwesomeIcon className="fontawersome-ico" icon={faCaretDown} />
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/mundo/">
              Mundo
            </a>
          </li>
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/deportes/">
              Deportes
            </a>
          </li>
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/vivir/">
              Vivir+
            </a>
          </li>
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/status-k/">
              Status K
            </a>
          </li>
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/podcasts/">
              Podcasts
            </a>
          </li>
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/opinion/">
              Opinión
            </a>
          </li>
          <li
            className="nav__item dropdown-list"
            onMouseEnter={dropdownListToggle}
            onMouseLeave={dropdownListToggle}
          >
            <span>Multimedia</span>
          </li>
          <FontAwesomeIcon className="fontawersome-ico" icon={faCaretDown} />
          <li className="nav__item">
            <a className="link" href="https://www.prensa.com/correcciones/">
              Correcciones
            </a>
          </li>
        </ul>
      </nav>
      <div className="popular-news" onMouseOver={popularNewsListener} onMouseLeave={closeDropDownList}>
        {!openDropDownList ? (
          <div className="popular-news__de-hoy">
            <span className="popular-news__heading">TEMAS DE HOY:</span>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/tribunal-electoral-te/"
            >
              Tribunal Electoral ...
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/proceso-civil/"
            >
              Proceso Civil
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/kenia-porcell/"
            >
              Kenia Porcell
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/juan-carlos-varela/"
            >
              Juan Carlos Varela
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/enfermedades/"
            >
              Enfermedades
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/turismo/"
            >
              Turismo
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/viajes/"
            >
              Viajes
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/caja-de-seguro-social/"
            >
              Caja De Seguro Socia...
            </a>
            <a
              className="link popular-news__link"
              href="https://www.prensa.com/tema/jubilados/"
            >
              Jubilados
            </a>
          </div>
        ) : (
          ''
        )}
        {openDropDownList && dropDownName === 'Locales' ? (
          <div className="popular-news__locales">
            <a className='link' href="https://www.prensa.com/sociedad/">Sociedad</a>
            <a className='link' href="https://www.prensa.com/provincias/">Provincias</a>
            <a className='link' href="https://www.prensa.com/comunicados/">Comunicados</a>
            <a className='link' href="https://www.prensa.com/luctuosas/">Luctuosas</a>
          </div>
        ) : (
          ''
        )}
        {openDropDownList && dropDownName === 'Economía' ? (
          <div className="popular-news__economia">
            <a className='link' href="https://www.prensa.com/notas-de-prensa/">Notas de Prensa Corporativas</a>
            <a className='link' href="https://www.prensa.com/martes-financiero/">Martes Financiero</a>
          </div>
        ) : (
          ''
        )}
        {openDropDownList && dropDownName === 'Multimedia' ? (
          <div className="popular-news__multimedia">
            <a className='link' href="https://www.prensa.com/podcasts/">Podcasts</a>
            <a className='link' href="https://www.prensa.com/videos/">Videos</a>
            <a className='link' href="https://www.prensa.com/fotogalerias/">Fotografía</a>
            <a className='link' href="https://www.prensa.com/correcciones/">Infografías</a>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Navigation;
