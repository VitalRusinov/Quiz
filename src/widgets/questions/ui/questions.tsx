import { useCallback, useEffect, useRef, useState } from "react";
import { Question } from "entities/question"
import { IQuestion, selectQuestions, useAppSelector } from "shared/lib/store";
import { getRandomArray } from "shared/lib/getRandom";
import { SendAnswerButton } from "features/send-answer";

export const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const questions: IQuestion[] = useAppSelector(selectQuestions);
  const questionsLength = questions.length;
  console.log('questions', questions);

  console.log('questionsLength', questionsLength);

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



  //Проверить необходимость useEffect

  // useEffect(() => {
  //   if (questions && questionLength > 0) {
  //     setRandomQuestionsIndexes(getRandomArray(questionLength - 1));
  //   }
  // }, [questions]);

  const onChange = useCallback((answer: string) => {
    setCurrentAnswer(answer);
  }, [])

  // Тут как-то криво написано - возврат из функции
  const handleSend = useCallback(() => {
    setCurrentQuestionIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex < questionsLength ? nextIndex : prev;
    });
    //setCurrentQuestionIndex((prev) => prev + 1);
    setCurrentAnswer('');
  }, []);

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
            answer={{questionId: currentQuestion.id, currentAnswer: currentAnswer}}
            isQuestionsOver={currentQuestionIndex === (questionsLength - 1)}/>
        </>
      }


    </div>
  )
}