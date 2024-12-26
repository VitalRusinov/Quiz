import { configureStore } from '@reduxjs/toolkit';
// import questionsReducer from './questionsSlice';
// import answersReducer from './answersSlice';

export const store = configureStore({
  reducer: {
    // questions: questionsReducer,
    // answers: answersReducer,
  },
});

// export declare  type RootState = ReturnType<typeof store.getState>;
// export declare type AppDispatch = typeof store.dispatch;
