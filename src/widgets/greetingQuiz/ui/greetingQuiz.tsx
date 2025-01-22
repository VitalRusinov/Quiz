import { StartQuizButton } from 'features/start-quiz';
import './greetingQuiz.scss';
import { Greeting } from './greeting/greeting';

export const GreetingQuiz = () => {
  return (
    <div id="greeting-quiz__container" className="greeting-quiz__container">
      <Greeting />
      <StartQuizButton />
    </div>
  );
};
