import { LanguageSwitcher } from "features/language-switcher"
import { ThemeSwitcher } from "features/theme-switcher"


export const Header = () => {
  return (
    <div className="header">
      <ThemeSwitcher/>
      <LanguageSwitcher />
    </div>
  )
}