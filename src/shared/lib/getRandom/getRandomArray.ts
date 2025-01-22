export const getRandomArray = (n: number): number[] => {
  if (n < 1) return [];

  const array: number[] = Array.from({ length: n + 1 }, (_, i) => i);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
