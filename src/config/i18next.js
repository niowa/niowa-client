import i18n from 'i18next';

// locales
import US from '../locales/en';

i18n.init({
  debug: false,
  fallbackLng: ['US'],
  lng: 'US',

  ns: [ 'app', 'home', 'reset', 'auth' ],
  defaultNS: 'app',

  resources: {
    US,
  }
});

export default i18n;
