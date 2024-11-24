import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../slices';

import styles from './Results.module.scss';
import getResultTitle from './getResultTitle';
import { removeAllAnswer } from '../../slices/answersSlice';
import { ResultsProps } from '../../types/types';
import { useTranslation } from 'react-i18next';

const Results: React.FC<ResultsProps> = ({ setCurrentQuestionIndex }) => {
  const { t } = useTranslation();

  const answers = useSelector((state: RootState) => state.answers.answers);
  const answersCount = answers.length;
  const correctAnswersCount = answers.reduce(
    (acc, answer) => (answer.isAnswerCorrect ? acc + 1 : acc),
    0
  );

  const dispatch = useDispatch();

  const handleReRun = () => {
    dispatch(removeAllAnswer());
    setCurrentQuestionIndex(0);
  };

  return (
    <div className={styles.result}>
      {getResultTitle({ correctAnswersCount, answersCount })}
      <ul className={styles['answers-container']}>
        {answers.map((answer) => {
          const { id, question, correctAnswer, isAnswerCorrect } = answer;
          return (
            <li
              key={id}
              className={isAnswerCorrect ? styles.correct : styles.uncorrect}
            >
              <p>{question}</p>
              <span>{correctAnswer}</span>
            </li>
          );
        })}
      </ul>
      {correctAnswersCount < answersCount && (
        <div className={styles.button}>
          <button onClick={handleReRun}>{t('again')}</button>
        </div>
      )}
    </div>
  );
};

export default Results;
