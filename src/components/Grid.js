import React from 'react';
import { cn } from '../utils/cn';

export const Grid = ({ guesses, currentGuess, targetWord, gameOver }) => {
  const empties = Array(6 - guesses.length - 1).fill('');

  const checkLetter = (word, pos) => {
    const letter = word[pos];
    if (!letter) return '';
    if (word[pos] === targetWord[pos]) return 'correct';
    if (targetWord.includes(letter)) return 'present';
    return 'absent';
  };

  return (
    <div className="grid grid-rows-6 gap-2 p-4">
      {guesses.map((guess, i) => (
        <div key={i} className="grid grid-cols-5 gap-2">
          {guess.split('').map((letter, j) => (
            <div
              key={j}
              className={cn(
                'w-14 h-14 border-2 flex items-center justify-center',
                'text-2xl font-bold uppercase transition-all duration-500',
                'dark:text-white',
                checkLetter(guess, j) === 'correct' && 'bg-green-500 border-green-500',
                checkLetter(guess, j) === 'present' && 'bg-yellow-500 border-yellow-500',
                checkLetter(guess, j) === 'absent' && 'bg-gray-500 border-gray-500'
              )}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
      
      {!gameOver && currentGuess && (
        <div className="grid grid-cols-5 gap-2">
          {Array(5).fill('').map((_, i) => (
            <div
              key={i}
              className={cn(
                'w-14 h-14 border-2 flex items-center justify-center',
                'text-2xl font-bold uppercase dark:text-white',
                'animate-pulse'
              )}
            >
              {currentGuess[i] || ''}
            </div>
          ))}
        </div>
      )}

      {empties.map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-2">
          {Array(5).fill('').map((_, j) => (
            <div
              key={j}
              className="w-14 h-14 border-2 border-gray-200 dark:border-gray-700"
            />
          ))}
        </div>
      ))}
    </div>
  );
};