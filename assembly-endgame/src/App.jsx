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

  const wrongGuessCount = guessedLetters.reduce(
    (count, currentLetter) =>
      currentWord.includes(currentLetter) ? count : count + 1,
    0
  );

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
      <NewGame />
    </>
  );
}

export default App;
