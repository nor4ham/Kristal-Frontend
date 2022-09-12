import React , { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { BrowserRouter} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/js/bootstrap.js'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
i18n
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ['en', 'ar'],
    fallbackLng: "en",
    debug: false,

    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    
  });
   const loadingMarkup = (
    <div >
      <h3>Loading..</h3>
    </div>
  ) 


ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </Suspense>,

  document.getElementById('root')
);
