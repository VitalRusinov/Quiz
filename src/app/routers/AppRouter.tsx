import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StartPage } from 'pages/start';
import { QuestionsPage } from 'pages/questions';
import { pagesPaths } from 'shared/paths';
import { ResultPage } from 'pages/results';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pagesPaths.start} element={<StartPage />} />
        <Route path={pagesPaths.questions} element={<QuestionsPage />} />
        <Route path={pagesPaths.result} element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};
