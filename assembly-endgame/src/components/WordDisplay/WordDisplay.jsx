import PropTypes from "prop-types";
import "./WordDisplay.css";

function WordDisplay(props) {
  const wordArr = [...props.currentWord];

  const letterElements = wordArr.map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ));

  return <section className="current-word">{letterElements}</section>;
}

WordDisplay.propTypes = {
  currentWord: PropTypes.string.isRequired,
};

export default WordDisplay;
