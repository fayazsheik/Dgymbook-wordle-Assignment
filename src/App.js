import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Grid } from "./components/Grid";
import { Keyboard } from "./components/Keyboard";
import { getRandomWord, WORD_LIST } from "./utils/words";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [usedLetters, setUsedLetters] = useState({});

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleKeyPress = (key) => {
    if (gameOver) return;

    if (key === "ENTER") {
      if (currentGuess.length !== 5) {
        setMessage("Word must be 5 letters");
        return;
      }
      if (!WORD_LIST.includes(currentGuess)) {
        setMessage("Not in word list");
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);

      // Update used letters
      currentGuess.split("").forEach((letter, index) => {
        if (letter === targetWord[index]) {
          setUsedLetters((prev) => ({ ...prev, [letter]: "correct" }));
        } else if (targetWord.includes(letter)) {
          setUsedLetters((prev) => ({
            ...prev,
            [letter]: prev[letter] === "correct" ? "correct" : "present",
          }));
        } else {
          setUsedLetters((prev) => ({ ...prev, [letter]: "absent" }));
        }
      });

      if (currentGuess === targetWord) {
        setMessage("You won! 🎉");
        setGameOver(true);
      } else if (newGuesses.length === 6) {
        setMessage(`Game Over! The word was ${targetWord}`);
        setGameOver(true);
      }

      setCurrentGuess("");
      setMessage("");
    } else if (key === "⌫") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      setMessage("");
    } else if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
      setMessage("");
    }
  };

  const resetGame = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setMessage("");
    setUsedLetters({});
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleKeyPress("ENTER");
      } else if (e.key === "Backspace") {
        handleKeyPress("⌫");
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= "A" && key <= "Z") {
          handleKeyPress(key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, gameOver]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 border">
        <header className="flex justify-between items-center py-4 border-b dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Wordle Clone
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun className="text-white" /> : <Moon />}
          </button>
        </header>

        {message && (
          <div className="mt-4 p-4 text-center text-white bg-gray-800 rounded-md animate-fade-in">
            {message}
          </div>
        )}

        <main className="flex flex-col items-center justify-center gap-8 py-8">
          <Grid
            guesses={guesses}
            currentGuess={currentGuess}
            targetWord={targetWord}
            gameOver={gameOver}
          />

          <Keyboard usedLetters={usedLetters} onKeyPress={handleKeyPress} />

          {gameOver && (
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              New Game
            </button>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
