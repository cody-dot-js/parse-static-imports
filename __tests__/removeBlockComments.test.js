import fs from "fs";
import path from "path";
import removeBlockComments from "../src/removeBlockComments";

test("given nothing returns an empty string", () => {
  const expected = "";
  const result = removeBlockComments();

  expect(result).toBe(expected);
});

test("given a string containing no block comments returns the given string", () => {
  const expected = "foo bar baz";
  const given = "foo bar baz";
  const result = removeBlockComments(given);

  expect(result).toBe(expected);
});

test("filters out line comments from the fixture", () => {
  const expected = 'import React, { useCallback } from "react";';
  const given = fs.readFileSync(
    path.resolve(path.join(__dirname, "./__fixtures__/withBlockComments.js")),
    "utf8"
  );
  const result = removeBlockComments(given);

  expect(result).toBe(expected);
});
