import { Greeting } from "entities/greeting"
import { StartQuizButton } from "features/start-quiz"
import './greetingQuiz.scss'

export const GreetingQuiz = () => {
  return (
    <div className="greeting-quiz__container">
      <Greeting />
      <StartQuizButton />
    </div>
  )
}