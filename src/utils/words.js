// List of valid 5-letter words
export const WORD_LIST = [
  'REACT', 'BREAK', 'CLEAN', 'DREAM', 'FLASH', 'GUARD', 'HOUSE', 'LIGHT',
  'MUSIC', 'PAINT', 'QUICK', 'SMILE', 'THINK', 'WATER', 'WORLD'
];

export const getRandomWord = () => {
  return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
};