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
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {},
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {} = questionsSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default questionsSlice.reducer;