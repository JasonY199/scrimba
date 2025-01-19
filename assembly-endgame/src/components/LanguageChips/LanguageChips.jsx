import "./LanguageChips.css";
import language from "../../data/languages.js";

function LanguageChips() {
  function renderChips() {
    return language.map((chip) => (
      <div
        key={chip.name}
        style={{ color: chip.color, backgroundColor: chip.backgroundColor }}
      >
        {chip.name}
      </div>
    ));
  }

  return <section className="language-chips">{renderChips()}</section>;
}

export default LanguageChips;
