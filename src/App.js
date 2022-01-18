import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Русский' }
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p>{t('errorCount.key', { count: 0 })}</p>
        <p> {t('errorCount.key', { count: 1 })}</p>
        <p> {t('errorCount.key', { count: 2 })}</p>
        <p> {t('errorCount.key', { count: 5 })}</p>
        <p> {t('errorCount.key', { count: 53 })}</p>
        <p> {t('errorCount.key', { count: 100 })}</p>

      </header>
    </div>
  );
}

export default App;
