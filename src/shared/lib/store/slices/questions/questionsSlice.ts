import { createSlice } from '@reduxjs/toolkit';

import { questionsData } from './questionsData';
import { IQuestionsState } from './types';

const initialState: IQuestionsState = {
  questions: questionsData,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
});

export default questionsSlice.reducer;
