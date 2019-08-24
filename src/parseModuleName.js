export default function parseModuleName(str = "") {
  const normalized = str.replace(/(\'|\`)+/gm, '"'); // eslint-disable-line no-useless-escape
  const importIdx = normalized.indexOf("import");
  const quoteIdx = normalized.indexOf('"');
  const semiColonIdx = normalized.indexOf(";");

  if (importIdx < 0 || semiColonIdx < 0 || quoteIdx < 0) {
    return "";
  }

  return normalized
    .substring(quoteIdx, semiColonIdx)
    .replace(/(\;|\"|\s)+/gm, ""); // eslint-disable-line no-useless-escape
}
