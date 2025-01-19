import "./LanguageChips.css";
import language from "../../data/languages.js";

function LanguageChips() {
  const languageElements = language.map((lang) => {
    const styles = {
      color: lang.color,
      backgroundColor: lang.backgroundColor,
    };
    return (
      <span key={lang.name} style={styles}>
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languageElements}</section>;
}

export default LanguageChips;
