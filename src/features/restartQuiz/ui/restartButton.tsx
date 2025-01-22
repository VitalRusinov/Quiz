import { MainButton } from 'shared/ui/MainButton';
import { useRestart } from '../model/restart';
import { useTranslation } from 'react-i18next';

export const RestartQuizButton = () => {
  const { t } = useTranslation();
  const restart = useRestart();

  return <MainButton title={t('again')} onClick={restart} />;
};
