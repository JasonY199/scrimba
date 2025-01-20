export default function getRandomWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    throw new Error("wordList must be a non-empty array");
  }
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}
