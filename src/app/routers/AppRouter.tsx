import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { StartPage } from 'pages/StartPage';
import { QuestionsPage } from 'pages/QuestionsPage';
import { pagesPaths } from 'shared/consts';

export const AppRouter = () => {
  return (
      <div>
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
          </Routes>
        </BrowserRouter>
      </div>
  );
};

/*
            <Route
              path={pages.login}
              element={(
                <Login />
            )}
            />
            <Route
              path={pages.signUp}
              element={(
                  <SignUp />
            )}
            />
            */