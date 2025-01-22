import { useCallback } from 'react';
import { MainButton } from 'shared/ui/MainButton/';
import { addAnswer, IAnswer, useAppDispatch } from 'shared/store';

import { useTranslation } from 'react-i18next';

export interface ISendProps {
  handleSend: () => void;
  answer:
    | IAnswer
    | {
        questionId: number;
        currentAnswerId: null;
      };
}

export const SendAnswerButton: React.FC<ISendProps> = (props) => {
  const { handleSend, answer } = props;
  const { t } = useTranslation();
  const { currentAnswerId } = answer;

  const dispatch = useAppDispatch();

  const sendAnswer = useCallback((answer: IAnswer) => {
    dispatch(addAnswer(answer));
    handleSend();
  }, []);

  return (
    <MainButton
      title={t('send')}
      onClick={() => {
        if (currentAnswerId) sendAnswer(answer);
      }}
      disabled={!currentAnswerId}
    />
  );
};
