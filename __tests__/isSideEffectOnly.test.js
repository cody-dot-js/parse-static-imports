import isSideEffectOnly from "../src/isSideEffectOnly";

test("when given nothing it returns false", () => {
  const expected = false;
  const result = isSideEffectOnly();

  expect(result).toBe(expected);
});

test("when given a sideEffectOnly static import it returns true", () => {
  const expected = true;
  const sideEffectOnlyImports = [
    'import "./index.css";',
    "import './index.css';",
    "import `./index.css';`",
    'import "./without-trailing-semicolon"'
  ];

  sideEffectOnlyImports.forEach(str => {
    const result = isSideEffectOnly(str);

    expect(result).toBe(expected);
  });
});

test("when given a star import it returns false", () => {
  const expected = false;
  const starImport = 'import * as myPrecious from "react";';
  const result = isSideEffectOnly(starImport);

  expect(result).toBe(expected);
});

test("when given a default static import it returns false", () => {
  const expected = false;
  const defaultImport = 'import React from "react";';
  const result = isSideEffectOnly(defaultImport);

  expect(result).toBe(expected);
});

test("when given a default import and named imports it returns false", () => {
  const expected = false;
  const defaultImport = 'import React, { useState, useEffect } from "react";';
  const result = isSideEffectOnly(defaultImport);

  expect(result).toBe(expected);
});

test("when given named imports only it returns false", () => {
  const expected = false;
  const defaultImport = 'import { useState, useEffect } from "react";';
  const result = isSideEffectOnly(defaultImport);

  expect(result).toBe(expected);
});

test("given a commonjs require it returns false", () => {
  const expected = false;
  const commonjsRequire = 'const fs = require("fs");';
  const result = isSideEffectOnly(commonjsRequire);

  expect(result).toBe(expected);
});

test("given gibberish returns false", () => {
  const expected = false;
  const gibberish =
    "Esse adipisicing ad magna sunt exercitation deserunt labore.";
  const result = isSideEffectOnly(gibberish);

  expect(result).toBe(expected);
});
