import parseModuleName from "./parseModuleName";
import importLike from "./importLike";
import parseStarImport from "./parseStarImport";
import parseDefaultImport from "./parseDefaultImport";
import parseNamedImports from "./parseNamedImports";
import isSideEffectOnly from "./isSideEffectOnly";

export default function parse(file = "") {
  return file
    .split("import")
    .filter(importLike)
    .map(str => str.trim())
    .reduce(
      (acc, str) => [
        ...acc,
        {
          moduleName: parseModuleName(str),
          starImport: parseStarImport(str),
          namedImports: parseNamedImports(str),
          defaultImport: parseDefaultImport(str),
          sideEffectOnly: isSideEffectOnly(str)
        }
      ],
      []
    );
}
