import { useCallback, useEffect, useState } from 'react';
import { IQuestion } from 'shared/store/slices/questions/types';
import { getRandomArray } from 'shared/lib/getRandom';
import { ContentContainer } from 'shared/ui/ContentContainer';
import './question.scss'

/**Понять, нужен ли disabled  */

interface IQuestionProps {
  currentQuestion: IQuestion,
  onChange: (answer: string) => void,
}

export const Question: React.FC<IQuestionProps> = ({
  currentQuestion,
  onChange,
}) => {

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [randomIndexes, setRandomIndexes] = useState<number[]>([]);

  const { question, answers } = currentQuestion;
  
  useEffect(() => {
    if (answers && answers.length > 0) {
      setRandomIndexes(getRandomArray(answers.length - 1));
    }
  }, [answers]);

  const getLabelCasses = useCallback((answer: string) => {
    if (answer === selectedAnswer) {
      return 'label selected'
    }
    return 'label';
  }, [selectedAnswer])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    onChange(answer);
  }

  return (
    <ContentContainer> 
      <p className='question'>{question}</p>
      <ul className='answers'>
        {randomIndexes.map((index) => {
          const answer = answers[index];
          return (
            <li key={index} className='answer'>
              <input
                className='radio'
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
