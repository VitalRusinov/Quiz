import { createSelector } from '@reduxjs/toolkit'

const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.questions
)

export const selectQuestions = createSelector(
    selectBase,
    (state) => state.questions
)
