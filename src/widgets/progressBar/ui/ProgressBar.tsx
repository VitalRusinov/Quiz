import React, { useEffect, useState } from 'react';
import './ProgressBar.scss';
import {
  IAnswer,
  selectAnswers,
  selectQuestions,
  useAppSelector,
} from 'shared/store';
import { useTranslation } from 'react-i18next';
import { IQuestionsState } from 'shared/store';

export const ProgressBar: React.FC = () => {
  const [max, setMax] = useState<number>(0);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const questions: IQuestionsState = useAppSelector(selectQuestions);

  useEffect(() => {
    setMax(questions[currentLanguage].length);
  }, [currentLanguage]);

  const answers: IAnswer[] = useAppSelector(selectAnswers);
  const value = answers.length;

  const progress = Math.min(Math.max(value, 0), max);
  const percentage = (progress / max) * 100;

  return (
    <div className="progress-bar">
      <div className="progress-bar__numbers">
        <span className="progress-bar__start">0</span>
        <span className="progress-bar__end">{max}</span>
      </div>
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
          aria-valuenow={progress}
          aria-valuemax={max}
        />
      </div>
      <div
        className="progress-bar__value"
        style={{
          left: `${percentage}%`,
          width: `${100 - percentage}%`,
        }}
      >
        {progress}
      </div>
    </div>
  );
};
