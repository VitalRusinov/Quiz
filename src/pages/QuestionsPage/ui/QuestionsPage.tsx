import { Header } from "widgets/header"
import { ProgressBar } from "widgets/progressBar"
import { Questions } from "widgets/questions"

export const QuestionsPage = () => {
  return (
    <div className="questionsPage__container">
      <Header />
      <Questions />
      <ProgressBar />
    </div>
  )
}