import { ContentContainer } from "shared/ui/ContentContainer"
import './greeting.scss'
import { useTranslation } from "react-i18next";

export const Greeting = () => {
  const { t } = useTranslation();
  return (
    <ContentContainer>
      <span className="greeting">{t('greeting')}</span>
    </ContentContainer>
  )
}