import PropTypes from "prop-types";
import clsx from "clsx";
import "./Keyboard.css";

function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetElements = alphabet.split("").map((letter) => {
    const isGuessed = props.guessedLetters.includes(letter);
    const isCorrect = isGuessed && props.currentWord.includes(letter);
    const isWrong = isGuessed && !props.currentWord.includes(letter);
    const className = clsx({
      default: !isGuessed,
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        onClick={() => props.handleGuess(letter)}
        key={letter}
        className={className}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard-elements">{alphabetElements}</section>;
}

Keyboard.propTypes = {
  handleGuess: PropTypes.func.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentWord: PropTypes.string.isRequired,
};

export default Keyboard;
