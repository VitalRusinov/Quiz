import { MainButton } from 'shared/ui/MainButton/'
import './sendButton.scss'
import { ISendProps, useSendAnswer } from '../model/send-answer';



//Заменить слово на i18n
export const SendAnswerButton: React.FC<ISendProps> = (props) => {
  const sendAnswer = useSendAnswer(props);
  const { answer } = props;
  const {questionId} = answer;

  return (
    <MainButton title='Отправить ответ' onClick={sendAnswer} disabled={!questionId}/>
  )
}