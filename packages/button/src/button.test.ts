import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { type IButton } from "./button";

describe("IButton", () => {
  it('has a default variant "default', async () => {
    const el = await fixture<IButton>(html`<i-button>default</i-button>`);
    console.log("el", el);
    expect(el.variant).to.equal("default");
    // expect(el.counter).to.equal(5);
  });

  // it("increases the counter on button click", async () => {
  //   const el = await fixture<IndButton>(html`<int-ui></int-ui>`);
  //   el.shadowRoot!.querySelector("button")!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it("can override the title via attribute", async () => {
  //   const el = await fixture<IButton>(
  //     html`<int-ui title="attribute title"></int-ui>`
  //   );

  //   expect(el.title).to.equal("attribute title");
  // });

  // it("passes the a11y audit", async () => {
  //   const el = await fixture<IButton>(html`<i-button></i-button>`);

  //   await expect(el).shadowDom.to.be.accessible();
  // });
});
