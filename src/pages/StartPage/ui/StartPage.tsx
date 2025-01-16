import { GreetingQuiz } from "widgets/greetingQuiz"
import { Header } from "widgets/header"

export const StartPage = () => {
  return (
    <div className="startPage__container">
      <Header />
      <GreetingQuiz />
    </div>
  )
}