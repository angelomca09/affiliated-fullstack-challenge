import saleRepository from "../repositories/sale.repository";
import { stringToNumber } from "../utils/number";

async function readFile(buffer: Buffer) {
  const buf = Buffer.from(buffer.toString(), "utf8");
  return buf.toString();
}

async function parseFile(buffer: Buffer) {
  const lines = (await readFile(buffer)).trim().split("\n");
  const parsedLines = lines.map(line => ({
    type: line.substring(0, 1),
    date: line.substring(1, 26),
    product: line.substring(26, 56).trim(),
    value: stringToNumber(line.substring(56, 66)),
    seller: line.substring(66, 86).trim(),
  }))

  for (let line of parsedLines) {
    await saleRepository.insertSale(line)
  }

  return parsedLines;
}

async function getSales() {
  return await saleRepository.getSales();
}

async function getSale(sale_id: number) {
  return await saleRepository.getSale(sale_id);
}

export default {
  readFile,
  parseFile,
  getSales,
  getSale
}