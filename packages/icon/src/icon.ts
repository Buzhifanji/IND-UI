import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import styles from "./icon.css";

/**
 *
 */
@customElement("i-icon")
export class IIcon extends LitElement {
  static styles = styles;

  /** */
  @property() example: string = "";

  protected render() {
    return html`
      <span>
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "i-icon": IIcon;
  }
}
