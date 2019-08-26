export default function removeLineComments(str = "") {
  const lines = str.split("\n");

  return lines.filter(line => !line.includes("//")).join("\n");
}
