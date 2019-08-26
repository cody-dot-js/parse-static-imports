import fs from "fs";
import path from "path";
import removeLineComments from "../src/removeLineComments";

test("given nothing returns an empty string", () => {
  const expected = "";
  const result = removeLineComments();

  expect(result).toBe(expected);
});

test("given a string containing no line comments returns the given string", () => {
  const expected = "foo bar baz";
  const given = "foo bar baz";
  const result = removeLineComments(given);

  expect(result).toBe(expected);
});

test("filters out line comments from the fixture", () => {
  const expected = "foo;\nbaz;\n";
  const given = fs.readFileSync(
    path.resolve(path.join(__dirname, "./__fixtures__/withLineComments.js")),
    "utf8"
  );
  const result = removeLineComments(given);

  expect(result).toBe(expected);
});
