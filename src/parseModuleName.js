export default function parseModuleName(str = "") {
  const fromIdx = str.indexOf("from");
  const semiColonIdx = str.indexOf(";");

  return fromIdx >= 0
    ? str
        .substring(fromIdx + 4, semiColonIdx)
        .replace(/(;|")+/gm, "")
        .trim()
    : "";
}
