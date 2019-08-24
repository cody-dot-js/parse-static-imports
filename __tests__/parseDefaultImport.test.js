import parseDefaultImport from "../src/parseDefaultImport";

test("when given nothing it returns an empty string", () => {
  const expected = "";
  const result = parseDefaultImport();

  expect(result).toBe(expected);
});

test("when given a default import it returns the default import name", () => {
  const expected = "React";
  const defaultImport = 'import React from "react";';
  const result = parseDefaultImport(defaultImport);

  expect(result).toBe(expected);
});

test("when given a default import and named imports it returns the default import name", () => {
  const expected = "React";
  const defaultImport = 'import React, { useState, useEffect } from "react";';
  const result = parseDefaultImport(defaultImport);

  expect(result).toBe(expected);
});

test("when given named imports only it returns an empty string", () => {
  const expected = "";
  const defaultImport = 'import { useState, useEffect } from "react";';
  const result = parseDefaultImport(defaultImport);

  expect(result).toBe(expected);
});

test("when given a star import it returns an empty string", () => {
  const expected = "";
  const defaultImport = 'import * as myPrecious from "react";';
  const result = parseDefaultImport(defaultImport);

  expect(result).toBe(expected);
});

test("given a commonjs require it returns an empty string", () => {
  const expected = "";
  const commonjsRequire = 'const fs = require("fs");';
  const result = parseDefaultImport(commonjsRequire);

  expect(result).toBe(expected);
});

test("given gibberish returns an empty string", () => {
  const expected = "";
  const gibberish =
    "Esse adipisicing ad magna sunt exercitation deserunt labore.";
  const result = parseDefaultImport(gibberish);

  expect(result).toBe(expected);
});
