import PropTypes from "prop-types";
import "./Keyboard.css";

function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetElements = alphabet.split("").map((letter) => (
    <button onClick={() => props.handleGuess(letter)} key={letter}>
      {letter.toUpperCase()}
    </button>
  ));

  return <section className="keyboard-elements">{alphabetElements}</section>;
}

Keyboard.propTypes = {
  handleGuess: PropTypes.func.isRequired,
};

export default Keyboard;
