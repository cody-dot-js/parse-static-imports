import parseModuleName from "./parseModuleName";
import parseStarImport from "./parseStarImport";
import parseDefaultImport from "./parseDefaultImport";
import parseNamedImports from "./parseNamedImports";
import isSideEffectOnly from "./isSideEffectOnly";
import removeLineComments from "./removeLineComments";
import removeBlockComments from "./removeBlockComments";

function preprocess(file = "") {
  const normalizeLineEndings = file.replace(/\r/gm, "").trim();

  if (!file.includes("import ")) {
    return [];
  }

  return normalizeLineEndings
    .split("import ")
    .filter(Boolean)
    .map(str => {
      const normalized = str.replace(/(\'|\`)/gm, '"'); // eslint-disable-line no-useless-escape
      const openImportQuoteIdx = normalized.indexOf('"');
      const closeImportQuoteIdx = normalized.indexOf(
        '"',
        openImportQuoteIdx + 1
      );

      const restOfImport = normalized
        .substring(0, closeImportQuoteIdx + 1)
        .trim();

      return `import ${restOfImport}`;
    })
    .map(removeLineComments)
    .map(removeBlockComments);
}

/** parseStaticImports
 * returns a a list of objects whose properties represent significant elements
 * of the static import.
 *
 * @param {String} file - Contents of a file containing static imports
 * @returns {Object[]} List of static imports found in the given file contents
 */
export default function parseStaticImports(file = "") {
  return preprocess(file).reduce((acc, str) => {
    const sideEffectOnly = isSideEffectOnly(str);

    return [
      ...acc,
      {
        moduleName: parseModuleName(str),
        defaultImport: sideEffectOnly ? "" : parseDefaultImport(str),
        namedImports: sideEffectOnly ? [] : parseNamedImports(str),
        starImport: sideEffectOnly ? "" : parseStarImport(str),
        sideEffectOnly
      }
    ];
  }, []);
}
