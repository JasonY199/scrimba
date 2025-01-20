import PropTypes from "prop-types";
import "./NewGame.css";

function NewGame(props) {
  return (
    <>
      {props.isGameOver && (
        <button onClick={props.handleNewGame} className="new-game">
          New Game
        </button>
      )}
    </>
  );
}

NewGame.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  handleNewGame: PropTypes.func.isRequired,
};

export default NewGame;
