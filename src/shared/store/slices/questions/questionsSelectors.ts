import { createSelector } from '@reduxjs/toolkit'
import i18n from 'i18next';

export const selectQuestions = createSelector(
    (state: RootState) => state,
    (state) => state.questions
)

// export const selectQuestions = createSelector(
//   selectBase,
//   (state) => {
//     const currentLanguage = i18n.language;
//     return state[currentLanguage];
//   }
// );



