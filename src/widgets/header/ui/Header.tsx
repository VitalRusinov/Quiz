import { LanguageChanger } from "features/change-language"
import { ThemeChanger } from "features/change-theme"


export const Header = () => {
  return (
    <div className="header">
      <ThemeChanger/>
      <LanguageChanger />
    </div>
  )
}