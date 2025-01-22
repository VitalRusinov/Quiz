import { Header } from 'widgets/header';
import { ProgressBar } from 'widgets/progressBar';
import { Questions } from 'widgets/questions';
import './QuestionsPage.scss';

export const QuestionsPage = () => {
  return (
    <div id="questionsPage__container" className="questionsPage__container">
      <Header />
      <Questions />
      <ProgressBar />
    </div>
  );
};
