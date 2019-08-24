import parseNamedImports from "../src/parseNamedImports";

test("when given nothing it returns an empty list", () => {
  const expected = [];
  const result = parseNamedImports();

  expect(result).toStrictEqual(expected);
});

test("when given a default import and named imports it returns the named imports", () => {
  const expected = [
    {
      name: "useState",
      alias: "useState"
    },
    {
      name: "useEffect",
      alias: "useEffect"
    }
  ];
  const defaultImport = 'import React, { useState, useEffect } from "react";';
  const result = parseNamedImports(defaultImport);

  expect(result).toStrictEqual(expected);
});

test("when given named imports only it returns the named imports", () => {
  const expected = [
    {
      name: "useState",
      alias: "useState"
    },
    {
      name: "useEffect",
      alias: "useEffect"
    }
  ];
  const defaultImport = 'import { useState, useEffect } from "react";';
  const result = parseNamedImports(defaultImport);

  expect(result).toStrictEqual(expected);
});

test("when given an aliased named import it returns the aliased named imports", () => {
  const expected = [
    {
      name: "useState",
      alias: "useFoo"
    }
  ];
  const defaultImport = 'import { useState as useFoo } from "react";';
  const result = parseNamedImports(defaultImport);

  expect(result).toStrictEqual(expected);
});

test("when given a default import it returns an empty list", () => {
  const expected = [];
  const defaultImport = 'import React from "react";';
  const result = parseNamedImports(defaultImport);

  expect(result).toStrictEqual(expected);
});

test("when given a star import it returns an empty list", () => {
  const expected = [];
  const defaultImport = 'import * as myPrecious from "react";';
  const result = parseNamedImports(defaultImport);

  expect(result).toStrictEqual(expected);
});

test("given a commonjs require it returns an empty list", () => {
  const expected = [];
  const commonjsRequire = 'const fs = require("fs");';
  const result = parseNamedImports(commonjsRequire);

  expect(result).toStrictEqual(expected);
});

test("given gibberish returns an empty list", () => {
  const expected = [];
  const gibberish =
    "Esse adipisicing ad magna sunt exercitation deserunt labore.";
  const result = parseNamedImports(gibberish);

  expect(result).toStrictEqual(expected);
});
