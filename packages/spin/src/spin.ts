import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import styles from "./spin.css";

/**
 * @todo 自定义 图标
 */
@customElement("i-spin")
export class ISpin extends LitElement {
  static styles = styles;

  protected render() {
    return html`
      <svg part="base" class="int-spin" role="status">
        <circle class="int-spin_main"></circle>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "i-spin": ISpin;
  }
}
