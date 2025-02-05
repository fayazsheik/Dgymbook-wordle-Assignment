# Dgymbook-wordle-Assignment
# Wordle Clone

A modern, responsive Wordle clone built with React and Tailwind CSS. This project features a clean UI, dark mode support, and smooth animations.

![Wordle Clone Screenshot](wordle-clone/src/utils/Screenshot 2025-02-05 133224.png)

## Features

- 🎮 Classic Wordle gameplay
- 🌓 Dark mode support
- ⌨️ Virtual keyboard with color feedback
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- ⚡ Built with performance in mind

## Tech Stack

- React 18
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/wordle-clone.git
cd wordle-clone
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Game Rules

1. You have 6 attempts to guess a 5-letter word
2. After each guess, the letters will be color-coded:
   - 🟩 Green: Correct letter in the correct position
   - 🟨 Yellow: Correct letter in the wrong position
   - ⬜ Gray: Letter not in the word

## Project Structure

```
src/
├── components/
│   ├── Grid.js      # Game grid component
│   └── Keyboard.js  # Virtual keyboard component
├── utils/
│   ├── cn.js         # Utility for combining class names
│   └── words.js      # Word list and random word generator
├── App.js           # Main application component
└── index.js         # Application entry point
```



## License

This project is licensed under the Dgymbook License - see the [LICENSE](Dgymbook) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
