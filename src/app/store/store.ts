import { configureStore } from '@reduxjs/toolkit';
import { answersReducer, questionsReducer } from 'shared/store';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    answers: answersReducer,
  },
});

