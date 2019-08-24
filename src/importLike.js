export default function importLike(str = "") {
  const importIdx = str.indexOf("import");
  const quoteIdx = str.replace(/(\'|\`)+/gm, '"').indexOf('"'); // eslint-disable-line no-useless-escape

  const semiColonIdx = str.indexOf(";");
  const startIdx = importIdx >= 0 ? importIdx + 6 : 0;

  const betweenImportAndQuote = str.substring(startIdx, quoteIdx).trim();

  const sideEffectOnly =
    semiColonIdx >= 0 && betweenImportAndQuote.length === 0;

  return str.includes("from") || sideEffectOnly;
}
