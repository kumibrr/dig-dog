import { useTranslation } from "react-i18next";
import { languages } from "../../i18n/i18n";
import './header.css';

function Header(): JSX.Element {

  const { t, i18n } = useTranslation();

  const languageSelected = (language: string) => {
    i18n.changeLanguage(language);
  }

  return (
    <header className="App-header">
        <h1>🐶dig-dog</h1>
        <div>
          <label htmlFor="language">{t('languageSelect.label')}: </label>
          <select 
            name="language" 
            id="language"  
            onChange={(event) => languageSelected(event.target.value)}
            value={i18n.language.slice(0,2)}
            role='list'
          >
            {
              languages.map((lng, index) => {
                return lng && <option key={index} value={lng}>{t(lng)}</option>;
              })
            }
          </select>
        </div>
      </header>
  )
}

export default Header;