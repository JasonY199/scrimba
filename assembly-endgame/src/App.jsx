import React from "react";
import {
  Header,
  Status,
  LanguageChips,
  WordDisplay,
  Keyboard,
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
    </>
  );
}

export default App;
