import PropTypes from "prop-types";
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
        <p>You lose! Better start learning Assembly 😭</p>
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
    gameStateClass = "playing";
    renderText = (
      <>
        <h2>Keep going!</h2>
      </>
    );
  }

  return (
    <section className={`game-status ${gameStateClass}`}>{renderText}</section>
  );
}

Status.propTypes = {
  isGameLost: PropTypes.bool.isRequired,
  isGameWon: PropTypes.bool.isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Status;
