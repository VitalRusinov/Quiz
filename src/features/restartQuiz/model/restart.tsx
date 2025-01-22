import { useNavigate } from 'react-router-dom';
import { pagesPaths } from 'shared/consts';
import { removeAllAnswer, useAppDispatch } from 'shared/store';

export const useRestart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return () => {
    dispatch(removeAllAnswer());
    navigate(pagesPaths.questions);
  };
};
