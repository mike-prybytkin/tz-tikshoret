import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const OrderButton = () => {
  const [spinIco, setSpinIco] = useState(false);

  const orderButtonHandler = () => {
    setSpinIco(true);
    setTimeout(() => setSpinIco(false), 3000);
  }

  return (
    <div className="wrapper order-button-wrapper">
      <button className="button button_colored order-button" onClick={orderButtonHandler}>
        <FontAwesomeIcon className={`order-button__spinner ${spinIco ? 'loading' : ''}`} icon={faSpinner} />
        <span className='order-button__logo'></span>
        <span className='order-button__text'>PEDIR AHORA</span>
        <span className='order-button__sale'>CON 50% DE DESCUENTO</span>
      </button>
    </div>
  );
};

export default OrderButton;
