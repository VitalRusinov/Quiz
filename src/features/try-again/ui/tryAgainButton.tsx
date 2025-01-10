import { MainButton } from "shared/ui/MainButton";
import { useTryAgain } from "../model/try-again";

//i18n
export const TryAgainButton = () => {
  const tryAgain = useTryAgain();

  return (
    <MainButton title='Ещё раз' onClick={tryAgain}/>
  )
}