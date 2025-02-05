import React from 'react';
import { cn } from '../utils/cn';

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

export const Keyboard = ({ usedLetters, onKeyPress }) => {
  return (
    <div className="w-full max-w-xl mx-auto p-2">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1 my-1">
          {row.map((key) => {
            const status = usedLetters[key];
            return (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className={cn(
                  'px-2 py-4 text-sm font-bold rounded min-w-[2rem]',
                  'transition-all duration-200',
                  'dark:text-white',
                  status === 'correct' && 'bg-green-500 text-white',
                  status === 'present' && 'bg-yellow-500 text-white',
                  status === 'absent' && 'bg-gray-500 text-white',
                  !status && 'bg-gray-200 dark:bg-gray-700',
                  key.length > 1 && 'px-4' // Wider for ENTER and backspace
                )}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};