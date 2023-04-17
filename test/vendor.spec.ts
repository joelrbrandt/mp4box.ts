import "mocha";
import { expect } from "chai";

import { createFile, ISOFile } from "#mp4box";

describe("mp4box", () => {
  it("constructs a file", () => {
    expect(createFile()).to.be.instanceOf(ISOFile);
  });
});
