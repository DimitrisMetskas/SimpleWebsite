import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="language-switcher" role="Translator" aria-label="Language Selection">
      <button
        className={`language-btn${currentLang === 'en' ? ' active' : ''}`}
        onClick={() => i18n.changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`language-btn${currentLang === 'el' ? ' active' : ''}`}
        onClick={() => i18n.changeLanguage('el')}
        aria-label="Switch to Greek"
      >
        GR
      </button>
  </div>
  );
}

export default LanguageSwitcher;


