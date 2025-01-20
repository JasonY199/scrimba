import React from "react";
import {
  Header,
  Status,
  LanguageChips,
  WordDisplay,
  Keyboard,
  NewGame,
} from "./components";

function App() {
  const [currentWord] = React.useState("react");
  const [guessedLetters, setGuessedLetters] = React.useState([]);

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
      <LanguageChips />
      <WordDisplay guessedLetters={guessedLetters} currentWord={currentWord} />
      <Keyboard
        handleGuess={handleGuess}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
      />
      <NewGame />
    </>
  );
}

export default App;
