import React from "react";
import {
  Header,
  Status,
  LanguageChips,
  WordDisplay,
  Keyboard,
  NewGame,
  ScreenReaderStatus,
} from "./components";
import languages from "./data/languages";
import words from "./data/words";
import getRandomWord from "./utils/wordUtils";

function App() {
  // State values
  const [currentWord, setCurrentWord] = React.useState(() =>
    getRandomWord(words)
  );
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  // Derived values
  const numGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.reduce(
    (count, current) => (currentWord.includes(current) ? count : count + 1),
    0
  );
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    !!lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  // Event handlers
  function handleGuess(pressedLetter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(pressedLetter)
        ? prevLetters
        : [...prevLetters, pressedLetter]
    );
  }

  function handleNewGame() {
    setCurrentWord(getRandomWord(words));
    setGuessedLetters([]);
  }

  return (
    <>
      <Header />
      <Status
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        guessedLetters={guessedLetters}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <ScreenReaderStatus
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        lastGuessedLetter={lastGuessedLetter}
        numGuessesLeft={numGuessesLeft}
      />
      <LanguageChips wrongGuessCount={wrongGuessCount} />
      <WordDisplay
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        numGuessesLeft={numGuessesLeft}
        lastGuessedLetter={lastGuessedLetter}
      />
      <Keyboard
        handleGuess={handleGuess}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
      />
      <NewGame isGameOver={isGameOver} handleNewGame={handleNewGame} />
    </>
  );
}

export default App;
