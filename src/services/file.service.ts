async function readFile(buffer: Buffer) {
  const buf = Buffer.from(buffer.toString(), "utf8");
  return buf.toString();
}
async function parseFile(buffer: Buffer) {
  const lines = (await readFile(buffer)).trim().split("\n");
  const parsedLines = lines.map(line => ({
    type: line.substring(0, 1),
    date: line.substring(1, 26),
    product: line.substring(26, 56),
    value: line.substring(56, 66),
    seller: line.substring(66, 86),
  }))
  return parsedLines;
}

export default {
  readFile,
  parseFile
}