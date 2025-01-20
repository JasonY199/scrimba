import React from "react";
import {
  Header,
  Status,
  LanguageChips,
  WordDisplay,
  Keyboard,
  NewGame,
} from "./components";
import languages from "./data/languages";

function App() {
  // State values
  const [currentWord] = React.useState("react");
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  // Derived values
  const wrongGuessCount = guessedLetters.reduce(
    (count, current) => (currentWord.includes(current) ? count : count + 1),
    0
  );

  const isGameOver = () => {
    if (wrongGuessCount > languages.length - 2) {
      return true;
    } else if (
      currentWord.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      return true;
    } else {
      return false;
    }
  };

  // Event handlers
  function handleGuess(pressedLetter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(pressedLetter)
        ? prevLetters
        : [...prevLetters, pressedLetter]
    );
  }

  return (
    <>
      <Header />
      <Status />
      <LanguageChips wrongGuessCount={wrongGuessCount} />
      <WordDisplay guessedLetters={guessedLetters} currentWord={currentWord} />
      <Keyboard
        handleGuess={handleGuess}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
      />
      <NewGame isGameOver={isGameOver()} />
    </>
  );
}

export default App;
