import PropTypes from "prop-types";
import clsx from "clsx";
import "./LanguageChips.css";
import language from "../../data/languages.js";

function LanguageChips(props) {
  const languageElements = language.map((lang, index) => {
    const isLost = props.wrongGuessCount > index;

    const styles = {
      color: lang.color,
      backgroundColor: lang.backgroundColor,
    };

    const className = clsx({ lost: isLost });

    return (
      <span key={lang.name} style={styles} className={className}>
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languageElements}</section>;
}

LanguageChips.propTypes = {
  wrongGuessCount: PropTypes.number.isRequired,
};

export default LanguageChips;
