import { FC } from 'react';
import './MainButton.scss'

interface IMainButton {
  title: string,
  onClick: () => void,
}

  
export const MainButton: FC<IMainButton> = (props) => {
  const {title, onClick} = props;

  return (
    <button onClick={onClick}>{title}</button>
  )
}