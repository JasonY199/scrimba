import React from "react";
import Header from "./components/Header/Header";
import Status from "./components/Status/Status";
import LanguageChips from "./components/LanguageChips/LanguageChips";
import WordDisplay from "./components/WordDisplay/WordDisplay";

function App() {
  const [currentWord] = React.useState("React");

  return (
    <>
      <Header />
      <Status />
      <LanguageChips />
      <WordDisplay currentWord={currentWord} />
    </>
  );
}

export default App;
