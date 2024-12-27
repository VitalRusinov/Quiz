import { useCallback, useEffect, useState } from 'react';
import { IQuestion } from 'shared/lib/store/slices/questions/types';
import { getRandomArray } from 'shared/lib/getRandom';
import { ContentContainer } from 'shared/ui/ContentContainer';
import './question.scss'

/**Понять, нужен ли disabled  */

interface IQuestionProps {
  currentQuestion: IQuestion | null,
  onChange: (answer: string) => void,
}

export const Question: React.FC<IQuestionProps> = ({
  currentQuestion,
  onChange,
}) => {
  //const { t } = useTranslation();

  //i18n
  if (!currentQuestion) {
    return <div>{'loading'}</div>;
  }

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [randomIndexes, setRandomIndexes] = useState<number[]>([]);

  const { question, answers } = currentQuestion;

  // Проверить будет ли рандом разный, мб стоит вернуть useEffect

  // useEffect(() => {
  //   if (answers && answers.length > 0) {
  //     setRandomAnswersIndexesColl(getRandomArray(answers.length - 1));
  //   }
  // }, [answers]);
  setRandomIndexes(getRandomArray(answers.length - 1));

  const getLabelCasses = useCallback((answer: string) => {
    if (answer === selectedAnswer) {
      return 'label selected'
    }
    return 'label';
  }, [])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    onChange(answer);
  }

  return (
    <ContentContainer> 
      <p className='question'>{question}</p>
      <ul className='answers-list'>
        {randomIndexes.map((index) => {
          const answer = answers[index];
          return (
            <li key={index} className='answer'>
              <input
                className='radio-button'
                type="radio"
                id={`answer-${index}`}
                name="answer"
                checked={selectedAnswer === answer}
                onChange={() => handleAnswerSelect(answer)}
              />
              <label
                htmlFor={`answer-${index}`}
                className={getLabelCasses(answer)}
              >
                {answer}
              </label>
            </li>
          );
        })}
      </ul>
    </ContentContainer>
  );
};
