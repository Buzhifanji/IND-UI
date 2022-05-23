import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { type IIcon } from "./icon";

describe("IIcon", () => {
  it("default values are set correctly", async () => {
    const el = await fixture<IIcon>(html`<i-icon>default</i-icon>`);

    expect(el.example).to.equal("");
  });
});
