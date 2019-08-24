import parseStarImport from "../src/parseStarImport";

test("when given nothing it returns an empty string", () => {
  const expected = "";
  const result = parseStarImport();

  expect(result).toBe(expected);
});

test("when given a star import it returns the module object's name", () => {
  const expected = "myPrecious";
  const starImport = 'import * as myPrecious from "react";';
  const result = parseStarImport(starImport);

  expect(result).toBe(expected);
});

test("when given a default static import it returns an empty string", () => {
  const expected = "";
  const defaultImport = 'import React from "react";';
  const result = parseStarImport(defaultImport);

  expect(result).toBe(expected);
});

test("when given a default import and named imports it returns an empty string", () => {
  const expected = "";
  const defaultImport = 'import React, { useState, useEffect } from "react";';
  const result = parseStarImport(defaultImport);

  expect(result).toBe(expected);
});

test("when given named imports only it returns an empty string", () => {
  const expected = "";
  const defaultImport = 'import { useState, useEffect } from "react";';
  const result = parseStarImport(defaultImport);

  expect(result).toBe(expected);
});

test("given a commonjs require it returns an empty string", () => {
  const expected = "";
  const commonjsRequire = 'const fs = require("fs");';
  const result = parseStarImport(commonjsRequire);

  expect(result).toBe(expected);
});

test("given gibberish returns an empty string", () => {
  const expected = "";
  const gibberish =
    "Esse adipisicing ad magna sunt exercitation deserunt labore.";
  const result = parseStarImport(gibberish);

  expect(result).toBe(expected);
});
