import PropTypes from "prop-types";
import "./WordDisplay.css";

function WordDisplay(props) {
  const letterElements = props.currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  return <section className="current-word">{letterElements}</section>;
}

WordDisplay.propTypes = {
  currentWord: PropTypes.string.isRequired,
};

export default WordDisplay;
