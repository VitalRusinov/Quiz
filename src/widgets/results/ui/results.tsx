import {
  IAnswer,
  IQuestion,
  selectAnswers,
  selectQuestions,
  useAppSelector,
} from 'shared/store';
import { ResultCard } from './resultCard/resultCard';
import { RestartQuizButton } from 'features/restartQuiz';
import { useTranslation } from 'react-i18next';
import './results.scss';
import { ContentContainer } from 'shared/ui/ContentContainer';

export const Results = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const questions: IQuestion[] =
    useAppSelector(selectQuestions)[currentLanguage];
  const answers: IAnswer[] = useAppSelector(selectAnswers);

  return (
    <div className="results__container">
      <h1>{t('results')}</h1>
      <ContentContainer>
        {answers &&
          answers.map((answer, index) => {
            const { questionId, currentAnswerId } = answer;
            const question = questions.find(
              (question) => question.id === questionId,
            ) as IQuestion;
            const isAnswerCorrect =
              question.correctAnswerId === currentAnswerId;
            const currentAnswer = question.answers.find(
              (answer) => answer.answerId === currentAnswerId,
            )?.answer as string;

            return (
              <ResultCard
                key={index}
                question={question.question}
                currentAnswer={currentAnswer}
                isAnswerCorrect={isAnswerCorrect}
              />
            );
          })}
      </ContentContainer>
      <RestartQuizButton />
    </div>
  );
};
