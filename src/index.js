import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faOtter, faShrimp, faHatWizard, faDragon, faDog, faHorseHead, faCrow, faFrog, faRocket, faShieldCat, faFutbol
} from '@fortawesome/free-solid-svg-icons'
library.add(
    faOtter, faShrimp, faHatWizard, faDragon, faDog, faHorseHead, faCrow, faFrog, faRocket, faShieldCat, faFutbol
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
