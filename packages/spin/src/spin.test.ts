import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { type ISpin } from "./spin";

describe("ISpin", () => {
  it("default values are set correctly", async () => {
    const el = await fixture<ISpin>(html`<i-spin>default</i-spin>`);

    expect(el.example).to.equal("");
  });
});
