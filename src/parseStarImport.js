export default function parseStarImport(str = "") {
  const starIdx = str.indexOf("*");

  if (starIdx < 0) {
    return "";
  }

  const asIdx = str.indexOf("as");
  const fromIdx = str.indexOf("from");

  return str.substring(asIdx + 2, fromIdx).trim();
}
