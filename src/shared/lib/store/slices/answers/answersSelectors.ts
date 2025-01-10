import { createSelector } from '@reduxjs/toolkit'

const selectBase = createSelector(
    (state: RootState) => state,
    (state) => state.answers
)

export const selectAnswers = createSelector(
    selectBase,
    (state) => state.answers
)
