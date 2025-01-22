export const getCardClasses = (isAnswerCorrect: boolean) => {
  if (isAnswerCorrect) {
    return 'results__answer-card correct';
  } else {
    return 'results__answer-card incorrect';
  }
};
