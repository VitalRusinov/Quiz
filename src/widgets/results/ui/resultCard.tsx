import { getCardClasses } from "../model/getCardClasses";

interface IResultCardProps {
  question: string,
  currentAnswer: string,
  isAnswerCorrect: boolean,
}

export const ResultCard: React.FC<IResultCardProps> = (props) => {

  const { question, currentAnswer, isAnswerCorrect } = props;

  return (
    <div className={getCardClasses(isAnswerCorrect)}>
      <p className="results__answer-card__question">{question}</p>
      <p className="results__answer-card__currentAnswer">{currentAnswer}</p>
    </div>
  )
}