import fs from "fs";
import path from "path";
import { promisify } from "util";
import parse from "../src/parse";
import importSyntaxList from "./__fixtures__/importSyntaxList";

const readFileAsync = promisify(fs.readFile);
const fixturesDirectoryPath = path.resolve(__dirname, "__fixtures__");

test("when given nothing returns an empty list", () => {
  const expected = [];
  const result = parse();

  expect(result).toStrictEqual(expected);
});

describe("for each example in the import syntax list it returns the expected shape", () => {
  importSyntaxList.forEach(({ actual, expected }) => {
    const result = parse(actual);

    it(actual, () => {
      expect(result).toStrictEqual(expected);
    });
  });
});

test("it matches the snapshot for each app example fixture", async () => {
  const appExamplesPath = path.resolve(fixturesDirectoryPath, "app-examples");

  const appExamplePaths = fs
    .readdirSync(appExamplesPath)
    .map(filename => path.join(appExamplesPath, filename));

  const appExamples = await Promise.all(
    appExamplePaths.map(fixturePath => readFileAsync(fixturePath, "utf8"))
  );

  appExamples.forEach((fixture, index) => {
    const result = {
      result: parse(fixture),
      name: path.parse(appExamplePaths[index]).base
    };

    expect(result).toMatchSnapshot();
  });
});

test("when given gibberish it returns an empty list", () => {
  const expected = [];
  const gibberish =
    "Esse adipisicing ad magna sunt exercitation deserunt labore.";
  const result = parse(gibberish);

  expect(result).toStrictEqual(expected);
});
