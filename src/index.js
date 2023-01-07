import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/form.scss';
import 'bootstrap/scss/bootstrap.scss';
import 'intl-tel-input/build/css/intlTelInput.css';
import MyForm from './components/Form';
import BodyScripts from './components/BodyScripts';
import HeadScripts from './components/HeadScripts';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

const head = ReactDOM.createRoot(document.getElementById('head'));
const body = ReactDOM.createRoot(document.getElementById('body'));

head.render(
  <React.StrictMode>
    <HeadScripts />
  </React.StrictMode>
);

body.render(
  <React.StrictMode>
    <Header />
    <Content />
    {/*<MyForm />*/}
    <Footer />
    <BodyScripts />
  </React.StrictMode>
);
