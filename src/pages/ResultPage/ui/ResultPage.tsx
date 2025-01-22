import { Header } from 'widgets/header';
import { Results } from 'widgets/results';
import './ResultPage.scss';

export const ResultPage = () => {
  return (
    <div id="resultPage__container" className="resultPage__container">
      <Header />
      <Results />
    </div>
  );
};
