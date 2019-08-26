export default function importLike(str = "") {
  const importIdx = str.indexOf("import");
  const normalized = str.replace(/(\'|\`)+/gm, '"'); // eslint-disable-line no-useless-escape
  const startQuoteIdx = normalized.indexOf('"');
  const endQuoteIdx = normalized.indexOf('"', startQuoteIdx + 1);

  const startIdx = importIdx >= 0 ? importIdx + 6 : 0;

  const betweenImportAndQuote = str.substring(startIdx, startQuoteIdx).trim();

  const sideEffectOnly =
    startQuoteIdx >= 0 &&
    endQuoteIdx >= 0 &&
    betweenImportAndQuote.length === 0;

  return str.includes("from") || sideEffectOnly;
}
