import { useNavigate } from "react-router-dom";
import { pagesPaths } from "shared/consts";
import { addAnswer, IAnswer, useAppDispatch } from "shared/lib/store";

export interface ISendProps {
  handleSend: () => void,
  answer: IAnswer,
  isQuestionsOver: boolean,
}

export const useSendAnswer = (props: ISendProps) => {
  const { handleSend, answer, isQuestionsOver } = props;

  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  return () => {
    dispatch(addAnswer(answer));
    handleSend();
    if (isQuestionsOver) {
      navigate(pagesPaths.result);
    }
  };
}
