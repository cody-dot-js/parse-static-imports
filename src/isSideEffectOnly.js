import parseModuleName from "./parseModuleName";

export default function isSideEffectOnly(str = "") {
  const importIdx = str.indexOf("import");

  if (!str) {
    return false;
  }

  if (importIdx >= 0) {
    return str
      .replace(/\s+/gm, "")
      .replace(/(`|"|')+/gm, '"')
      .startsWith('import"');
  }

  return str && str.trim() === parseModuleName(str);
}
