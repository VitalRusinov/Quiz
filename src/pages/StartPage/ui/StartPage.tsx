import { GreetingQuiz } from "widgets/greetingQuiz"
import { Header } from "widgets/header"

export const StartPage = () => {
  return (
    <div className="__container">
      <Header />
      <GreetingQuiz />
    </div>
  )
}