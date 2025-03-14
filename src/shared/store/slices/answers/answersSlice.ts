import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer } from './types';

interface AnswersState {
  answers: IAnswer[];
}

const initialState: AnswersState = {
  answers: [],
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<IAnswer>) => {
      state.answers.push(action.payload);
    },
    removeAllAnswer: (state) => {
      state.answers = [];
    },
  },
});

export const { addAnswer, removeAllAnswer } = answersSlice.actions;
export default answersSlice.reducer;
