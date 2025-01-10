import { useNavigate } from "react-router-dom";
import { pagesPaths } from "shared/consts";
import { removeAllAnswer, useAppDispatch } from "shared/lib/store";

export const useTryAgain = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return () => {
    dispatch(removeAllAnswer());
    navigate(pagesPaths.questions);
  }
}

