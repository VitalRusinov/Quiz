import { useEffect, useState } from "react";
import { Question } from "entities/question"
import { IQuestion, selectQuestions, useAppSelector } from "shared/lib/store";
import { getRandomArray } from "shared/lib/getRandom";
import { SendAnswerButton } from "features/send-answer";

export const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const [randomQuestionsIndexes, setRandomQuestionsIndexes] = useState<number[]>([]);

  const questions = useAppSelector(selectQuestions);
  const questionLength = questions.length;

  //Проверить необходимость useEffect

  useEffect(() => {
    if (questions && questionLength > 0) {
      setRandomQuestionsIndexes(getRandomArray(questionLength - 1));
    }
  }, [questions]);

  const onChange = (answer: string) => {
    setCurrentAnswer(answer);
  };

  const handleSend = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setCurrentAnswer('');
  }

  const currentQuestion: IQuestion | null =
    questions[randomQuestionsIndexes[currentQuestionIndex]] || null;

  return (
    <div className="questions__container">
      <Question currentQuestion={currentQuestion} onChange={onChange}/>
      <SendAnswerButton 
        handleSend={handleSend} 
        questionId={currentQuestion?.id}
        currentAnswer={currentAnswer}/>
    </div>
  )
}