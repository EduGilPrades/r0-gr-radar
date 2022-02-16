import { expect } from "chai";
import { getDistance } from "../../src/helpers/Helpers";

describe("getDistance", () => {
  it("should be sqrt(2) when x:1 and y:1", () => {
    let x = 1;
    let y = 1;

    const result = getDistance({ x, y });

    expect(result).to.be.eq(Math.sqrt(2));
  });
  it("should be sqrt(8) when x:2 and y:2", () => {
    let x = 2;
    let y = 2;

    const result = getDistance({ x, y });

    expect(result).to.be.eq(Math.sqrt(8));
  });
  it("should be sqrt(4) when x:2 and y:0", () => {
    let x = 2;
    let y = 0;

    const result = getDistance({ x, y });

    expect(result).to.be.eq(Math.sqrt(4));
  });
});
