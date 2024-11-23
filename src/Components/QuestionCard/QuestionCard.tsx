import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAnswer } from '../../slices/answersSlice';
import styles from './QuestionCard.module.scss';
import { Question, QuestionProps } from '../../types/types';
import getRandomArray from '../../utils/getRandomArray';
import ProgressBar from '../ProgressBar/ProgressBar';

const QuestionCard: React.FC<QuestionProps> = ({ currentQuestion, onAnswerSelected }) => {

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  const dispatch = useDispatch();

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(false); // Изменить свойства при disabled
  const [randomAnswersIndexesColl, setRandomAnswersIndexesColl] = useState<number[]>([]);

  const { id, question, answers, correctAnswer } = currentQuestion;

  useEffect(() => {
    if (answers && answers.length > 0) {
      setRandomAnswersIndexesColl(getRandomArray(answers.length - 1));
    }
  }, [answers]);
  

  const handleAnswerSelect = (answer: string) => {
    if (!isDisabled) {
      setSelectedAnswer(answer);
      setIsDisabled(true);
      setTimeout(() => {
        onAnswerSelected();
        setIsDisabled(false);
        dispatch(
          addAnswer({
            id,
            question,
            correctAnswer,
            isAnswerCorrect: answer === correctAnswer,
          })
        );
      }, 1000);
    }
  };


  return (
    <section className={styles['question-card']}>
      <h1>Тестирование</h1>
      <div className={styles['question-card__container']}>
        <h2 className={styles['question-card__question']}>{question}</h2>
        <ul className={styles['question-card__answers']}>
          {randomAnswersIndexesColl.map((index) => {
            const answer = answers[index]
            return(
              <li key={index} className={styles['question-card__answer']}>
                <input
                  className={styles['question-card__radio']}
                  type="radio"
                  id={`answer-${index}`}
                  name="answer"
                  checked={selectedAnswer === answer}
                  onChange={() => handleAnswerSelect(answer)}
                />
                <label
                  htmlFor={`answer-${index}`}
                  className={`${styles['question-card__label']} ${
                    selectedAnswer === answer ? styles['question-card__label--selected'] : ''
                  }`}
                >
                  {answer}
                </label>
              </li>
            )}
          )}
        </ul>
      </div>
    </section>
  );
};

export default QuestionCard;
