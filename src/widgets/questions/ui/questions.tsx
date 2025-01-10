import { useCallback, useEffect, useRef, useState } from "react";
import { Question } from "entities/question"
import { IAnswer, IQuestion, selectAnswers, selectQuestions, useAppSelector } from "shared/lib/store";
import { getRandomArray } from "shared/lib/getRandom";
import { SendAnswerButton } from "features/send-answer";
import { useNavigate } from "react-router-dom";
import { pagesPaths } from "shared/consts";

export const Questions = () => {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const questions: IQuestion[] = useAppSelector(selectQuestions);
  const questionsLength = questions.length;

  //Удалить
  const answersFinal: IAnswer[] = useAppSelector(selectAnswers);


  const randomQuestionsIndexes = useRef<number[]>([]);

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null)

  useEffect(() => {
    if (questionsLength > 0) {
      randomQuestionsIndexes.current = getRandomArray(questionsLength - 1);
      setCurrentQuestion(questions[randomQuestionsIndexes.current[0]]);
    }
  }, [questionsLength]);

  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  // const [randomQuestionsIndexes, setRandomQuestionsIndexes] = useState<number[]>(
  //   getRandomArray(questionLength - 1)
  // );

  const onChange = useCallback((answer: string) => {
    setCurrentAnswer(answer);
  }, [])

  const handleSend = () => {
    setCurrentAnswer('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    console.log('currentQuestionIndex', currentQuestionIndex);
    if (currentQuestionIndex >= questionsLength) {
      console.log('answersFinal', answersFinal);
      navigate(pagesPaths.result);
      return;
    }
  }, [currentQuestionIndex])
  

  useEffect(() => {
    setCurrentQuestion(questions[randomQuestionsIndexes.current[currentQuestionIndex]]);
  }, [questions, currentQuestionIndex]);

  return (
    <div className="questions__container">
      {currentQuestion && 
        <>
          <Question currentQuestion={currentQuestion} onChange={onChange}/>
          <SendAnswerButton 
            handleSend={handleSend}
            answer={{questionId: currentQuestion.id, currentAnswer}}/>
        </>
      }
    </div>
  )
}