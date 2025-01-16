export { useAppDispatch, useAppSelector } from './redux'

export { default as questionsReducer } from './slices/questions/questionsSlice'
export { default as answersReducer } from './slices/answers/answersSlice'

export { selectQuestions } from './slices/questions/questionsSelectors'
export type { IQuestion } from './slices/questions/types'

export { addAnswer,removeAllAnswer } from './slices/answers/answersSlice'
export { selectAnswers } from './slices/answers/answersSelectors'
export type { IAnswer } from './slices/answers/types'
