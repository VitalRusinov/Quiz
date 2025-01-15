import React from "react"

import './ContentContainer.scss'

interface IContentContainer {
  readonly children: React.ReactNode;
}

export const ContentContainer: React.FC<IContentContainer> = ({ children }) => {
  return (
    <div className="content__container" id='content'>
      { children }
    </div>
  )
}