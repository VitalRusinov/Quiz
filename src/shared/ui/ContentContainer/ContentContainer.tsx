import { FC } from "react"

import './ContentContainer.scss'

interface IContentContainer {
  readonly children: React.ReactNode;
}

export const ContentContainer: FC<IContentContainer> = ({ children }) => {
  return (
    <div className="contentContainer">
      { children }
    </div>
  )
}