import { MainButton } from 'shared/ui/MainButton'
import './StartButton.scss'
import { useStartQuiz } from '../model/start-quiz';
import { useTranslation } from 'react-i18next';

export const StartQuizButton = () => {
  const startQuiz = useStartQuiz();
  const { t } = useTranslation();

  return (
    <MainButton title={t('start')} onClick={startQuiz}/>
  )
}