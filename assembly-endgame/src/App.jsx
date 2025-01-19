import React from "react";
import {
  Header,
  Status,
  LanguageChips,
  WordDisplay,
  Keyboard,
  NewGame,
} from "./components";

function App() {
  const [currentWord] = React.useState("react");

  return (
    <>
      <Header />
      <Status />
      <LanguageChips />
      <WordDisplay currentWord={currentWord} />
      <Keyboard />
      <NewGame />
    </>
  );
}

export default App;
