import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, AnswersState } from '../types/types';

const initialState: AnswersState = {
  answers: [],
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<Answer>) => {
      state.answers.push(action.payload);
    },
    removeAllAnswer: (state) => {
      state.answers = [];
    },
  },
});

// Экспортируем действия
export const { addAnswer, removeAllAnswer } = answersSlice.actions;

// Экспортируем редьюсер
export default answersSlice.reducer;
