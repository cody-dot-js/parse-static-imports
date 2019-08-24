import parseModuleName from "./parseModuleName";
import importLike from "./importLike";
import parseStarImport from "./parseStarImport";
import parseDefaultImport from "./parseDefaultImport";
import parseNamedImports from "./parseNamedImports";
import isSideEffectOnly from "./isSideEffectOnly";

export default function parse(file = "") {
  return file
    .split("import")
    .map(str => `import ${str}`)
    .filter(importLike)
    .map(str => str.trim())
    .reduce((acc, str) => {
      const sideEffectOnly = isSideEffectOnly(str);
      const imports = sideEffectOnly
        ? {}
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
