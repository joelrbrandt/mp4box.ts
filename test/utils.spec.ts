import "mocha";
import { expect } from "chai";

import { add } from "../src/utils.js";

describe("utils", () => {
  it("adds", () => {
    expect(add(1, 2)).to.equal(3);
  });
});
