import { useTranslation } from 'react-i18next';
import './Footer.scss';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      {t('created')}
      <a href="https://t.me/VitalRusinov">@VitalRusinov</a>
    </footer>
  );
};
