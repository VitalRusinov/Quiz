import { MainButton } from 'shared/ui/MainButton'
import './StartButton.scss'
import { useStartQuiz } from '../model/start-quiz';

//Заменить слово на i18n
export const StartQuizButton = () => {
  const startQuiz = useStartQuiz();

  return (
    <MainButton title='Старт!' onClick={startQuiz}/>
  )
}