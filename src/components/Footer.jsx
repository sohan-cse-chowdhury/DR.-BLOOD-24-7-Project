import "../index.css";
import { useTranslation } from "../App.jsx";


const Footer = ({ onNavigate, onRegisterDonor }) => {
  const { t, language } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t('footerTitle')}</h3>
          <p>{t('footerDesc')}</p>
          <div className="footer-stats">
            <div className="footer-stat">
              <strong>2,500+</strong>
              <span>{t('livesSaved')}</span>
            </div>
            <div className="footer-stat">
              <strong>50+</strong>
              <span>{t('partnerLocations')}</span>
            </div>
            <div className="footer-stat">
              <strong>8</strong>
              <span>{t('citiesCovered')}</span>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>{t('quickLinks')}</h4>
          <button onClick={() => onNavigate('home')}>{t('home')}</button>
          <button onClick={() => onNavigate('donors')}>{t('findDonors')}</button>
          <button onClick={onRegisterDonor}>{t('becomeDonor')}</button>
        </div>
        <div className="footer-section">
          <h4>{t('contactInfo')}</h4>
          <p>📧 help@drblood247.bd</p>
          <p>📞 +880 2-2222-HELP</p>
          <p>📍 {t('citiesCovered')} {t('all')}</p>
          <p>⏰ 24/7 {t('emergencyReady')}</p>
        </div>
        <div className="footer-section">
          <h4>{t('emergencyContacts')}</h4>
          <p>🚨 {language === 'en' ? 'National Emergency' : 'জাতীয় জরুরী'}: 999</p>
          <p>🏥 {t('ambulanceService')}: 199</p>
          <p> {t('bloodBankInfo')}: 16273</p>
          <p> {t('dghsHelpline')}: 16263</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
};
export default Footer;