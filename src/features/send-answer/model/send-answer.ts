import { useNavigate } from "react-router-dom";
import { pagesPaths } from "shared/consts";

export interface ISendProps {
  handleSend: () => void,
  questionId: number | undefined
  currentAnswer: string,
}

export const useSendAnswer = (props: ISendProps) => {

  return () => {
    navigate(pagesPaths.questions);
  };
}
