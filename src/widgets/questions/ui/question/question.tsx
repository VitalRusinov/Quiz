import { useCallback, useEffect, useState } from 'react';
import { IQuestion } from 'shared/store';
import { getRandomArray } from 'shared/lib/getRandom';
import { ContentContainer } from 'shared/ui/ContentContainer';
import './question.scss';

interface IQuestionProps {
  currentQuestion: IQuestion;
  onChange: (answerId: number) => void;
}

export const Question: React.FC<IQuestionProps> = ({
  currentQuestion,
  onChange,
}) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [randomIndexes, setRandomIndexes] = useState<number[]>([]);

  const { question, answers } = currentQuestion;

  useEffect(() => {
    setSelectedAnswerId(null);
  }, [currentQuestion]);

  useEffect(() => {
    if (answers && answers.length > 0) {
      setRandomIndexes(getRandomArray(answers.length - 1));
    }
  }, [answers]);

  const getLabelClasses = useCallback(
    (answerId: number) => {
      if (answerId === selectedAnswerId) {
        return 'label selected';
      }
      return 'label';
    },
    [selectedAnswerId],
  );

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswerId(answerId);
    onChange(answerId);
  };

  return (
    <ContentContainer>
      <p className="question">{question}</p>
      <ul className="answers">
        {randomIndexes.map((index) => {
          const { answerId, answer } = answers[index];
          return (
            <li key={index} className="answer">
              <input
                className="radio"
                type="radio"
                id={`answer-${index}`}
                name="answer"
                checked={selectedAnswerId === answerId}
                onChange={() => handleAnswerSelect(answerId)}
              />
              <label
                htmlFor={`answer-${index}`}
                className={getLabelClasses(answerId)}
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
