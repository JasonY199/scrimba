import PropTypes from "prop-types";

function ScreenReaderStatus(props) {
  return (
    <section className="sr-only" aria-live="polite" role="status">
      <p>
        {props.currentWord.includes(props.lastGuessedLetter)
          ? `Correct! The letter ${props.lastGuessedLetter} is in the word.`
          : `Sorry, the letter ${props.lastGuessedLetter} is not in the word.`}
        You have {props.numGuessesLeft} attempts left.
      </p>
      <p>
        Current word:{" "}
        {props.currentWord
          .split("")
          .map((letter) =>
            props.guessedLetters.includes(letter) ? letter + "." : "blank."
          )
          .join(" ")}
      </p>
    </section>
  );
}

ScreenReaderStatus.propTypes = {
  currentWord: PropTypes.string.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  numGuessesLeft: PropTypes.number.isRequired,
  lastGuessedLetter: PropTypes.string,
};

export default ScreenReaderStatus;
