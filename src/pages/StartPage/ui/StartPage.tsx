import { GreetingQuiz } from 'widgets/greetingQuiz';
import { Header } from 'widgets/header';
import './StartPage.scss';

export const StartPage = () => {
  return (
    <div className="startPage__container">
      <Header />
      <GreetingQuiz />
    </div>
  );
};
