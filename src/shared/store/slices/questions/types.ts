interface IAnswer {
  answerId: number,
  answer: string,
}

export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
  correctAnswerId: number;
}
