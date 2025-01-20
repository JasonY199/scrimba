import PropTypes from "prop-types";
import "./WordDisplay.css";

function WordDisplay(props) {
  const letterElements = props.currentWord.split("").map((letter, index) => {
    const isCorrectLetter = props.guessedLetters.includes(letter);
    return <span key={index}>{isCorrectLetter && letter.toUpperCase()}</span>;
  });

  return <section className="current-word">{letterElements}</section>;
}

WordDisplay.propTypes = {
  currentWord: PropTypes.string.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WordDisplay;
