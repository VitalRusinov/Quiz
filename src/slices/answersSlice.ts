import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, AnswersState } from '../types/types';

const initialState: AnswersState = {
  answers: [],
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    // Добавляем ответ
    addAnswer: (state, action: PayloadAction<Answer>) => {
      state.answers.push(action.payload);
    },
  },
});

// Экспортируем действия
export const { addAnswer } = answersSlice.actions;

// Экспортируем редьюсер
export default answersSlice.reducer;
