import { createSlice } from '@reduxjs/toolkit';

import { questionsData_ru } from './questionsData-ru';
import { questionsData_en } from './questionsData-en';
import { IQuestion } from './types';

export interface IQuestionsState {
  [language: string]: IQuestion[];
}

const initialState: IQuestionsState = {
  ru: questionsData_ru,
  en: questionsData_en,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
});

export default questionsSlice.reducer;
