export interface Question {
  id: number; // удалить
  question: string;
  answers: string[];
  correctAnswer: string;
}

//Тип для пропсов для QuestionCard
export interface QuestionProps {
  currentQuestion: Question | null | undefined;
  onAnswerSelected: () => void;
}

export interface Answer {
  id: number;
  question: string;
  correctAnswer: string;
  isAnswerCorrect: boolean;
}
// Тип состояния для ответов
export interface AnswersState {
  answers: Answer[];
}

export interface ResultsProps {
  setCurrentQuestionIndex: (num: number) => void;
}
