import PropTypes from "prop-types";
import clsx from "clsx";
import "./WordDisplay.css";

function WordDisplay(props) {
  const letterElements = props.currentWord.split("").map((letter, index) => {
    const isCorrectLetter = props.guessedLetters.includes(letter);
    const shouldDisplayLetter = isCorrectLetter || props.isGameLost;

    return (
      <span
        key={index}
        className={clsx(props.isGameLost && !isCorrectLetter && "red-text")}
      >
        {shouldDisplayLetter && letter.toUpperCase()}
      </span>
    );
  });

  return <section className="current-word">{letterElements}</section>;
}

WordDisplay.propTypes = {
  currentWord: PropTypes.string.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  numGuessesLeft: PropTypes.number.isRequired,
  lastGuessedLetter: PropTypes.string,
  isGameLost: PropTypes.bool.isRequired,
};

export default WordDisplay;
