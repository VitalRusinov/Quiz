import React, { useState, useEffect } from 'react';
import styles from './QuestionCard.module.scss';
import { Question, QuestionProps } from '../../types/types';
import getRandomArray from '../../utils/getRandomArray';

const QuestionCard: React.FC<QuestionProps> = ({ currentQuestion, onAnswerSelected }) => {

  if(!currentQuestion) return null;

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const { id, question, answers, correctAnswer } = currentQuestion;

  const handleAnswerSelect = (answer: string) => {
    if (!isDisabled) {
      setSelectedAnswer(answer);

      setIsDisabled(true);
      setTimeout(() => {
        onAnswerSelected();
        setIsDisabled(false);
      }, 1000);
    }
  };

  const randomAnswersIndexesColl = getRandomArray(answers.length - 1);
  const randomAnswersColl: string[] = [];
  randomAnswersIndexesColl.forEach(index => {
    randomAnswersColl.push(answers[index]);
  });

  console.log('randomAnswersColl:', randomAnswersColl);

  return (
    <section className={styles['question-card']}>
      <h2 className={styles['question-card__question']}>{question}</h2>
      <ul className={styles['question-card__answers']}>
        {answers.map((answer, index) => (
          <li key={index} className={styles['question-card__answer']}>
            <input
              className={styles['question-card__radio']}
              type="radio"
              id={`answer-${index}`}
              name="answer"
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerSelect(answer)}
              disabled={isDisabled}
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
        ))}
      </ul>
    </section>
  );
};

export default QuestionCard;
