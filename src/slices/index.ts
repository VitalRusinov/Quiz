import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice';
import answersReducer from './answersSlice';


export const store =configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    questions: questionsReducer,
    answers: answersReducer,
  },
});

// Типизация RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;