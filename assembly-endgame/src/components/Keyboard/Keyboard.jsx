import "./Keyboard.css";

function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetElements = alphabet
    .split("")
    .map((letter) => <button key={letter}>{letter.toUpperCase()}</button>);

  return <section className="keyboard-elements">{alphabetElements}</section>;
}

export default Keyboard;
