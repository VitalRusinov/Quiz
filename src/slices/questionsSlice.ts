import { createSlice } from '@reduxjs/toolkit';

import questionsData from '../assets/questionsData';
import { Question } from '../types/types';

interface QuestionsState {
  questions: Question[];
}

const initialState: QuestionsState = {
  questions: questionsData
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
});

export const {} = questionsSlice.actions;

export default questionsSlice.reducer;