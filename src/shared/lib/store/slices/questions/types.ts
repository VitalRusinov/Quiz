export interface IQuestion {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface IQuestionsState {
  questions: IQuestion[];
}