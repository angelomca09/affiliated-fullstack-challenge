import fileService from "../services/file.service";
import fs from "fs";

describe("Files", () => {
  const buffer = fs.readFileSync("sales.txt");
  test("Can read files", () => {
    expect(fileService.readFile(buffer)).not.toBeUndefined();
    expect(fileService.readFile(buffer)).toEqual(Buffer.from(buffer.toString(), "utf8").toString())
  });
  test("Can parse files", () => {
    expect(fileService.parseFile(buffer)).not.toBeUndefined()
  });
})