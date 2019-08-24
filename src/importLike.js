export default function importLike(str = "") {
  const sideEffectOnly = str
    .replace(/\s+/gm, "")
    .replace(/(`|"|')+/gm, '"')
    .startsWith('import"');
  return str.includes("from") || sideEffectOnly;
}
