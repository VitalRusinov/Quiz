import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { StartPage } from 'pages/StartPage';
import { QuestionsPage } from 'pages/QuestionsPage';
import { pagesPaths } from 'shared/consts';
import { ResultPage } from 'pages/ResultPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={pagesPaths.start}
          element={(
            <StartPage />
          )}
        />
        <Route
          path={pagesPaths.questions}
          element={(
            <QuestionsPage />
          )}
        />
        <Route
          path={pagesPaths.result}
          element={(
            <ResultPage />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};
