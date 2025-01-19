import React from "react";
import Header from "./components/Header/Header";
import Status from "./components/Status/Status";
import LanguageChips from "./components/LanguageChips/LanguageChips";
import WordDisplay from "./components/WordDisplay/WordDisplay";
import Keyboard from "./components/Keyboard/Keyboard";

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
