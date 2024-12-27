import './MainButton.scss'

interface IMainButton {
  title: string,
  onClick: () => void,
  disabled?: boolean,
}

  
export const MainButton: React.FC<IMainButton> = ({title, onClick, disabled = false}) => {

  return (
    <button onClick={onClick} disabled={disabled}>{title}</button>
  )
}