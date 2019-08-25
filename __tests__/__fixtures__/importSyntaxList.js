// list of import examples from MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Syntax

const importSyntaxList = [
  {
    actual: 'import defaultExport from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "",
        namedImports: [],
        defaultImport: "defaultExport",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import * as name from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "name",
        namedImports: [],
        defaultImport: "",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import { export1 } from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "",
        namedImports: [
          {
            name: "export1",
            alias: "export1"
          }
        ],
        defaultImport: "",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import { export1 as alias1 } from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "",
        namedImports: [
          {
            name: "export1",
            alias: "alias1"
          }
        ],
        defaultImport: "",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import { export1, export2 } from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "",
        namedImports: [
          {
            name: "export1",
            alias: "export1"
          },
          {
            name: "export2",
            alias: "export2"
          }
        ],
        defaultImport: "",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual:
      'import { foo, bar } from "module-name/path/to/specific/un-exported/file";',
    expected: [
      {
        moduleName: "module-name/path/to/specific/un-exported/file",
        starImport: "",
        namedImports: [
          {
            name: "foo",
            alias: "foo"
          },
          {
            name: "bar",
            alias: "bar"
          }
        ],
        defaultImport: "",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import { export1, export2 as alias2 } from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "",
        namedImports: [
          {
            name: "export1",
            alias: "export1"
          },
          {
            name: "export2",
            alias: "alias2"
          }
        ],
        defaultImport: "",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import defaultExport, { export1 } from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "",
        namedImports: [
          {
            name: "export1",
            alias: "export1"
          }
        ],
        defaultImport: "defaultExport",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import defaultExport, * as name from "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "name",
        namedImports: [],
        defaultImport: "defaultExport",
        sideEffectOnly: false
      }
    ]
  },
  {
    actual: 'import "module-name";',
    expected: [
      {
        moduleName: "module-name",
        starImport: "",
        namedImports: [],
        defaultImport: "",
        sideEffectOnly: true
      }
    ]
  },
  {
    // TODO: https://github.com/dev-cprice/parse-static-imports/issues/4
    actual: 'var promise = import("module-name");',
    expected: []
  }
];

export default importSyntaxList;
