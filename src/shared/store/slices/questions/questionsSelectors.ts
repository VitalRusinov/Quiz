import { createSelector } from '@reduxjs/toolkit';

export const selectQuestions = createSelector(
  (state: RootState) => state,
  (state) => state.questions,
);
