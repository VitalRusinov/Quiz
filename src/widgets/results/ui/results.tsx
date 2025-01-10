import { IAnswer, IQuestion, selectAnswers, selectQuestions, useAppSelector } from "shared/lib/store";
import { ResultCard } from "./resultCard";
import { TryAgainButton } from "features/try-again/ui/tryAgainButton";

export const Results = () => {
  const questions: IQuestion[] = useAppSelector(selectQuestions);
  const answers: IAnswer[] = useAppSelector(selectAnswers);

  return (
    <div className="results__container">
      <div className="results__cards-container">
        {answers && answers.map((answer, index) => {
          const {questionId, currentAnswer} = answer;
          const question = questions.find(question => question.id === questionId) as IQuestion;
          const isAnswerCorrect = question.correctAnswer === currentAnswer;

          return (
            <ResultCard 
              key={index}
              question={question.question}
              currentAnswer={currentAnswer}
              isAnswerCorrect={isAnswerCorrect}/>
          )
        })}
      </div>
      <TryAgainButton />
    </div>
  )
}