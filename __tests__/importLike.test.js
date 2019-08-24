import importLike from "../src/importLike";

test("when given nothing it returns false", () => {
  const expected = false;
  const result = importLike();

  expect(result).toBe(expected);
});

test("when given a default static import it returns true", () => {
  const expected = true;
  const staticImport = 'import React from "react";';
  const result = importLike(staticImport);

  expect(result).toBe(expected);
});

test("when given a sideEffectOnly static import it returns true", () => {
  const expected = true;
  const sideEffectOnlyImports = [
    'import "./index.css";',
    "import './index.css';",
    "import `./index.css';`"
  ];

  sideEffectOnlyImports.forEach(str => {
    const result = importLike(str);

    expect(result).toBe(expected);
  });
});

test("when given a commonjs require it returns false", () => {
  const expected = false;
  const commonjsRequire = 'const fs = require("fs");';
  const result = importLike(commonjsRequire);

  expect(result).toBe(expected);
});

test("when given gibberish it returns false", () => {
  const expected = false;
  const gibberish =
    "Esse adipisicing ad magna sunt exercitation deserunt labore.";
  const result = importLike(gibberish);

  expect(result).toBe(expected);
});
