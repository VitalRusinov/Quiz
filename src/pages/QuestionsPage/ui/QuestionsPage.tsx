import { Header } from "widgets/header"
import { ProgressBar } from "widgets/ProgressBar"
import { Questions } from "widgets/questions"

export const QuestionsPage = () => {
  return (
    <div>
      <Header />
      <Questions />
      <ProgressBar />
    </div>
  )
}