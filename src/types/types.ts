export interface Question {
  id: number,
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface QuestionProps {
  currentQuestion: Question;
  onAnswerSelected: () => void;
}