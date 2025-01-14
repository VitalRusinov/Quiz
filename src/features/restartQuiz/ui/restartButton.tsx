import { MainButton } from "shared/ui/MainButton";
import { useRestart } from "../model/restart";

//i18n
export const RestartQuizButton = () => {
  const restart = useRestart();

  return (
    <MainButton title='Ещё раз' onClick={restart}/>
  )
}