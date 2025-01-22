import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question } from 'entities/question';
import { IQuestion, selectQuestions, useAppSelector } from 'shared/store';
import { getRandomArray } from 'shared/lib/getRandom';
import { SendAnswerButton } from 'features/send-answer';
import { pagesPaths } from 'shared/consts';
import { useTranslation } from 'react-i18next';
import { IQuestionsState } from 'shared/store/slices/questions/questionsSlice';

import './questions.scss';

export const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(
    null,
  );
  const [currentAnswerId, setCurrentAnswerId] = useState<number | null>(null);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const questions: IQuestionsState = useAppSelector(selectQuestions);
  const questionsLength = questions[currentLanguage].length;

  const randomQuestionsIndexes = useRef<number[]>([]);

  useEffect(() => {
    if (questionsLength > 0) {
      randomQuestionsIndexes.current = getRandomArray(questionsLength - 1);
      setCurrentQuestion(
        questions[currentLanguage][randomQuestionsIndexes.current[0]],
      );
    }
  }, [questionsLength]);

  const onChange = useCallback((answerId: number) => {
    setCurrentAnswerId(answerId);
  }, []);

  const handleSend = useCallback(() => {
    setCurrentAnswerId(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }, []);

  useEffect(() => {
    if (currentQuestionIndex >= questionsLength) {
      navigate(pagesPaths.result);
      return;
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    setCurrentQuestion(
      questions[currentLanguage][
        randomQuestionsIndexes.current[currentQuestionIndex]
      ],
    );
  }, [questions, currentQuestionIndex, currentLanguage]);

  return (
    <div id="questions__container" className="questions__container">
      <h1>{t('testing')}</h1>
      {currentQuestion && (
        <>
          <Question currentQuestion={currentQuestion} onChange={onChange} />
          <SendAnswerButton
            handleSend={handleSend}
            answer={{ questionId: currentQuestion.id, currentAnswerId }}
          />
        </>
      )}
    </div>
  );
};
