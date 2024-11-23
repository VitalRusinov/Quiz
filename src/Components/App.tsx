import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../slices/index';

import styles from './App.module.scss';
import QuestionCard from './QuestionCard/QuestionCard';
import getRandomArray from '../utils/getRandomArray';
import { Question } from '../types/types';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [randomQuestionsIndexesColl, setRandomQuestionsIndexesColl] = useState<number[]>([]);

  const questions = useSelector((state: RootState) => state.questions.questions);

  console.log('questions:', questions);

  useEffect(() => {
    setRandomQuestionsIndexesColl(getRandomArray(questions.length - 1));
  }, [])

  //const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[randomQuestionsIndexesColl[currentQuestionIndex]]);


  // console.log('questions[randomQuestionsIndexes[currentQuestionIndex]]:', questions[randomQuestionsIndexesColl[currentQuestionIndex]]);

  // console.log('currentQuestionIndex:', currentQuestionIndex);
  // console.log('randomQuestionsIndexes:', randomQuestionsIndexesColl);
  //console.log('currentQuestion:', currentQuestion);

  const onAnswerSelected = () => {
    //setCurrentQuestionIndex((prevCount) => prevCount + 1);
    setCurrentQuestionIndex(() => currentQuestionIndex + 1);
    //setCurrentQuestion(questions[randomQuestionsIndexes[currentQuestionIndex]])
  };

  let currentQuestion: Question = questions[randomQuestionsIndexesColl[currentQuestionIndex]];

  return (
    <main className={styles['main-container']}>
      <h1>Тестирование</h1>
      <QuestionCard currentQuestion={currentQuestion} onAnswerSelected={onAnswerSelected} />
    </main>
  )
}

export default App
