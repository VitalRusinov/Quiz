import { ContentContainer } from "shared/ui/ContentContainer"
import './greeting.scss'
//Поменять надпись на i18n
export const Greeting = () => {
  return (
    <ContentContainer>
      <span className="greeting">Для начала квиза, нажмите Старт!</span>
    </ContentContainer>
  )
}