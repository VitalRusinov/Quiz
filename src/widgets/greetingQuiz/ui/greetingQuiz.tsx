import { Greeting } from "entities/greeting"
import { StartQuizButton } from "features/start-quiz"

export const GreetingQuiz = () => {
  return (
    <div className="greeting-quiz__container">
      <Greeting />
      <StartQuizButton />
    </div>
  )
}