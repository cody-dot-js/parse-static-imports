export default function parseDefaultImport(str = "") {
  const startCurlyIdx = str.indexOf("{");
  const starIdx = str.indexOf("*");
  const fromIdx = str.indexOf("from");
  const importIdx = str.indexOf("import");
  const startIdx = importIdx < 0 ? 0 : importIdx + 6;

  if (starIdx >= 0) {
    return "";
  }

  return startCurlyIdx >= 0
    ? str.substring(startIdx, startCurlyIdx).replace(/(,|\s)+/gm, "")
    : str.substring(startIdx, fromIdx).trim();
}
