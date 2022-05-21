import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { type ISpin } from "./spin";

describe("ISpin", () => {
  it("should pass accessibility tests", async () => {
    const el = await fixture<ISpin>(html`<i-spin></i-spin>`);

    await expect(el).to.be.accessible();
  });

  it("should have a role fo status", async () => {
    const el = await fixture<ISpin>(html`<i-spin></i-spin>`);

    const base = el.shadowRoot!.querySelector('[part="base"]')!;
    expect(base).have.attribute("role", "status");
  });
});
