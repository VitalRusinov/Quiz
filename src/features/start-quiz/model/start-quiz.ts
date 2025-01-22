import { useNavigate } from 'react-router-dom';
import { pagesPaths } from 'shared/consts';

export const useStartQuiz = () => {
  const navigate = useNavigate();

  return () => {
    navigate(pagesPaths.questions);
  };
};
