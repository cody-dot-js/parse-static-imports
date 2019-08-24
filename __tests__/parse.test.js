import fs from "fs";
import path from "path";
import { promisify } from "util";
import parse from "../src/parse";

const readFileAsync = promisify(fs.readFile);

test("when given nothing returns an empty list", () => {
  const expected = [];
  const result = parse();

  expect(result).toStrictEqual(expected);
});

test("it matches the snapshot for each fixture", async () => {
  const fixturesDirectoryPath = path.resolve(__dirname, "__fixtures__");

  const fixturePaths = fs
    .readdirSync(fixturesDirectoryPath)
    .map(filename => path.join(fixturesDirectoryPath, filename));

  const fixtures = await Promise.all(
    fixturePaths.map(fixturePath => readFileAsync(fixturePath, "utf8"))
  );

  fixtures.forEach((fixture, index) => {
    const result = {
      result: parse(fixture),
      fixtureName: path.parse(fixturePaths[index]).base
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
