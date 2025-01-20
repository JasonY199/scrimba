import PropTypes from "prop-types";
import getFarewellText from "./StatusUtils.js";
import languages from "../../data/languages.js";
import "./Status.css";

function Status(props) {
  let renderText = "";
  let gameStateClass = "";
  const isNewGame = props.guessedLetters.length === 0;

  if (isNewGame) {
    gameStateClass = "new";
    renderText = (
      <>
        <h2>Start by guessing a letter</h2>
      </>
    );
  } else if (props.isGameLost) {
    gameStateClass = "lose";
    renderText = (
      <>
        <h2>Game over!</h2>
        <p>Better start learning Assembly 😭</p>
      </>
    );
  } else if (props.isGameWon) {
    gameStateClass = "win";
    renderText = (
      <>
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </>
    );
  } else {
    if (props.isLastGuessIncorrect) {
      gameStateClass = "wrong";
      renderText = (
        <>
          <h2>{getFarewellText(languages[props.wrongGuessCount - 1].name)}</h2>
        </>
      );
    } else {
      gameStateClass = "correct";
      renderText = (
        <>
          <h2>Nice, keep going!</h2>
        </>
      );
    }
  }

  return (
    <section className={`game-status ${gameStateClass}`}>{renderText}</section>
  );
}

Status.propTypes = {
  isGameLost: PropTypes.bool.isRequired,
  isGameWon: PropTypes.bool.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLastGuessIncorrect: PropTypes.bool.isRequired,
  wrongGuessCount: PropTypes.number.isRequired,
};

export default Status;
