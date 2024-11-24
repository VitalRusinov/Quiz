import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../slices/index';

import styles from './App.module.scss';
import QuestionCard from './QuestionCard/QuestionCard';
import Results from './Results/Results';
import getRandomArray from '../utils/getRandomArray';
import { Question } from '../types/types';
import ProgressBar from './ProgressBar/ProgressBar';


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [randomQuestionsIndexesColl, setRandomQuestionsIndexesColl] = useState<number[]>([]);

  const questions = useSelector((state: RootState) => state.questions.questions);
  const answers = useSelector((state: RootState) => state.answers.answers);

  const questionLength = questions.length;

  useEffect(() => {
    if (questions && questionLength > 0) {
      setRandomQuestionsIndexesColl(getRandomArray(questionLength - 1));
    }
  }, [questions]);

  const onAnswerSelected = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const currentQuestion: Question | null = 
  questions[randomQuestionsIndexesColl[currentQuestionIndex]] || null;

  return (
    <main className={styles['main-container']}>
      {
        answers.length < questionLength && !!currentQuestion &&
        <div className={styles['quiz-container']}>
          <QuestionCard currentQuestion={currentQuestion} onAnswerSelected={onAnswerSelected} />
          <ProgressBar value={currentQuestionIndex} max={questionLength} label={'ProgressBar'}/>
        </div>
      }
      {
        answers.length === questionLength &&
        <Results setCurrentQuestionIndex={setCurrentQuestionIndex}/>
      }
    </main>
  )
}

export default App
