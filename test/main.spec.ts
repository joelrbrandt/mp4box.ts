import "mocha";
import { expect } from "chai";

import { add } from "../src/main.js";

describe("main", () => {
  it("adds", () => {
    expect(add(1, 2)).to.equal(3);
  });
});
