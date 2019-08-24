import parseModuleName from "../src/parseModuleName";

test("given nothing returns an empty string", () => {
  const expected = "";
  const result = parseModuleName();

  expect(result).toBe(expected);
});

test("given a static import from node_modules it returns the module-name", () => {
  const expected = "react";
  const staticImport = 'import React from "react";';
  const result = parseModuleName(staticImport);

  expect(result).toBe(expected);
});

test("given a relative static import it returns the module-name", () => {
  const expected = "../App";
  const staticImport = 'import App from "../App";';
  const result = parseModuleName(staticImport);

  expect(result).toBe(expected);
});

test("given a static import with garbage at the end it returns the module-name", () => {
  const expected = "../App";
  const staticImport =
    'import App from "../App";Consequat qui occaecat ut aliquip reprehenderit elit in enim.';
  const result = parseModuleName(staticImport);

  expect(result).toBe(expected);
});

test("given a commonjs require it returns an empty string", () => {
  const expected = "";
  const commonjsRequire = 'const fs = require("fs");';
  const result = parseModuleName(commonjsRequire);

  expect(result).toBe(expected);
});

test("given gibberish returns an empty string", () => {
  const expected = "";
  const gibberish =
    "Esse adipisicing ad magna sunt exercitation deserunt labore.";
  const result = parseModuleName(gibberish);

  expect(result).toBe(expected);
});
