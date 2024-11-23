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
 // const [currentQuestion, setCurrentQuestion] = useState<Question | null>()

  const questions = useSelector((state: RootState) => state.questions.questions);
  const answers = useSelector((state: RootState) => state.answers.answers);

  //console.log('questions:', questions);

  // useEffect(() => {
  //   setRandomQuestionsIndexesColl(getRandomArray(questions.length - 1));
  // }, [])

  useEffect(() => {
    if (questions && questions.length > 0) {
      setRandomQuestionsIndexesColl(getRandomArray(questions.length - 1));
    }
  }, [questions]);

  //const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[randomQuestionsIndexesColl[currentQuestionIndex]]);


  // console.log('questions[randomQuestionsIndexes[currentQuestionIndex]]:', questions[randomQuestionsIndexesColl[currentQuestionIndex]]);

  // console.log('currentQuestionIndex:', currentQuestionIndex);
  // console.log('randomQuestionsIndexes:', randomQuestionsIndexesColl);
  //console.log('currentQuestion:', currentQuestion);

  const onAnswerSelected = () => {
    //setCurrentQuestionIndex((prevCount) => prevCount + 1);
    setCurrentQuestionIndex(() => currentQuestionIndex + 1);
  };


  //let currentQuestion: Question = questions[randomQuestionsIndexesColl[currentQuestionIndex]];

  const currentQuestion: Question | null = 
  questions[randomQuestionsIndexesColl[currentQuestionIndex]] || null;

  return (
    <main className={styles['main-container']}>
      {
        answers.length < questions.length && !!currentQuestion &&
        <div className={styles['quiz-container']}>
          <QuestionCard currentQuestion={currentQuestion} onAnswerSelected={onAnswerSelected} />
          <ProgressBar value={currentQuestionIndex} max={questions.length} label={'kabek'}/>
        </div>
      }
      {
        answers.length === questions.length &&
        <Results />
      }
    </main>
  )
}

export default App
