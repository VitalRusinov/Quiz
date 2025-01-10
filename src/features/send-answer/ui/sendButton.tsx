import { useCallback } from 'react';
import { MainButton } from 'shared/ui/MainButton/'
import { addAnswer, IAnswer, useAppDispatch } from 'shared/lib/store';

import './sendButton.scss'

export interface ISendProps {
  handleSend: () => void,
  answer: IAnswer,
}

export const SendAnswerButton: React.FC<ISendProps> = (props) => {
  const { handleSend, answer } = props;
  const {currentAnswer} = answer;

  const dispatch = useAppDispatch();

  const sendAnswer = useCallback ((answer: IAnswer) => {
    dispatch(addAnswer(answer));
    handleSend();
  }, [])

//Заменить слово на i18n, не блокируется кнопка
  return (
    <MainButton title='Отправить ответ' onClick={() => sendAnswer(answer)} disabled={!currentAnswer}/>
  )
}