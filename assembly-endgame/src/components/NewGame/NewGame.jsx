import PropTypes from "prop-types";
import "./NewGame.css";

function NewGame(props) {
  return (
    <>{props.isGameOver && <button className="new-game">New Game</button>}</>
  );
}

NewGame.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
};

export default NewGame;
