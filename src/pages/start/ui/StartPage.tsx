import { GreetingQuiz } from 'widgets/greetingQuiz';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import './StartPage.scss';

export const StartPage = () => {
  return (
    <div id="startPage__container" className="startPage__container">
      <Header />
      <GreetingQuiz />
      <Footer />
    </div>
  );
};
