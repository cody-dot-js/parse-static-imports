import parseModuleName from "./parseModuleName";
import importLike from "./importLike";
import parseStarImport from "./parseStarImport";
import parseDefaultImport from "./parseDefaultImport";
import parseNamedImports from "./parseNamedImports";
import isSideEffectOnly from "./isSideEffectOnly";

/** parseStaticImports
 * The parseStaticImports() method returns a a list of objects whose properties
 * represent significant elements of the static import.
 *
 * @param {String} file - Contents of a file containing static imports
 * @returns {Object[]} - List of static imports found in the given file contents
 */
export default function parseStaticImports(file = "") {
  return file
    .split("import")
    .map(str => `import ${str}`)
    .filter(importLike)
    .map(str => str.trim())
    .reduce((acc, str) => {
      const sideEffectOnly = isSideEffectOnly(str);
      const imports = sideEffectOnly
        ? {
            starImport: "",
            namedImports: [],
            defaultImport: ""
          }
        : {
            starImport: parseStarImport(str),
            namedImports: parseNamedImports(str),
            defaultImport: parseDefaultImport(str)
          };

      return [
        ...acc,
        {
          moduleName: parseModuleName(str),
          ...imports,
          sideEffectOnly
        }
      ];
    }, []);
}
