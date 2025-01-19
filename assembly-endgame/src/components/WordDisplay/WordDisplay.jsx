import PropTypes from "prop-types";
import "./WordDisplay.css";

function WordDisplay(props) {
  return <section>{props.currentWord}</section>;
}

WordDisplay.propTypes = {
  currentWord: PropTypes.string.isRequired,
};

export default WordDisplay;
