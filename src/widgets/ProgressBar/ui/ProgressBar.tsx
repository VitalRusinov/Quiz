import React from 'react';
import './ProgressBar.scss';
import { IAnswer, IQuestion, selectAnswers, selectQuestions, useAppSelector } from 'shared/lib/store';

// interface ProgressBarProps {
//   value: number; // Текущее значение прогресса
//   max: number; // Максимальное значение прогресса
// }

export const ProgressBar: React.FC = () => {

  const questions: IQuestion[] = useAppSelector(selectQuestions);
  const max = questions.length;

  const answers: IAnswer[] = useAppSelector(selectAnswers);
  const value = answers.length;
  // Ограничиваем значение от 0 до max
  const progress = Math.min(Math.max(value, 0), max);
  const percentage = (progress / max) * 100;

  return (
    <div className='progress-bar'>
      {/* Верхняя линия с числами */}
      <div className='progress-bar__numbers'>
        <span className='progress-bar__start'>0</span>
        <span className='progress-bar__end'>{max}</span>
      </div>
      {/* Основной трек прогресс-бара */}
      <div className='progress-bar__track'>
        <div
          className='progress-bar__fill'
          style={{ width: `${percentage}%` }}
          aria-valuenow={progress}
          aria-valuemax={max}
        />
      </div>
      {/* Подпись с текущим значением */}
      <div
        className='progress-bar__value'
        style={{ left: `${percentage}%` }}
      >
        {progress}
      </div>
    </div>
  );
};
